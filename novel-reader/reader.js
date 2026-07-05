#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const readline = require('node:readline');

const STATE_FILE = path.join(__dirname, '.reader-state.json');

// 隐蔽行：指向一个 txt/md 文件路径，内容会随机混入小说页面中
// 设为 null 禁用；也可通过 --mix-file 命令行参数覆盖
const HIDDEN_MIX_FILE = null;

function normalizeEncoding(encoding) {
  const value = String(encoding || 'auto').toLowerCase();
  if (value === 'utf8' || value === 'utf-8') return 'utf8';
  if (value === 'gbk') return 'gbk';
  if (value === 'auto') return 'auto';
  throw new Error(`Unsupported encoding: ${encoding}`);
}

function decodeWith(buffer, encoding, fatal) {
  const label = encoding === 'utf8' ? 'utf-8' : encoding;
  const decoder = new TextDecoder(label, { fatal });
  return decoder.decode(buffer);
}

function decodeNovelBuffer(buffer, encoding = 'auto') {
  const normalized = normalizeEncoding(encoding);
  if (normalized === 'utf8') {
    return { text: decodeWith(buffer, 'utf8', false), encoding: 'utf8' };
  }
  if (normalized === 'gbk') {
    return { text: decodeWith(buffer, 'gbk', false), encoding: 'gbk' };
  }

  try {
    return { text: decodeWith(buffer, 'utf8', true), encoding: 'utf8' };
  } catch (_error) {
    return { text: decodeWith(buffer, 'gbk', false), encoding: 'gbk' };
  }
}

function loadMixSegments(filePath) {
  const buffer = fs.readFileSync(filePath);
  const decoded = decodeNovelBuffer(buffer, 'auto');
  const raw = decoded.text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  return raw.split(/\n\n+/).map(s => s.trim()).filter(Boolean);
}

function mixContent(pageLines, mixSegments) {
  if (!mixSegments || mixSegments.length === 0) return pageLines;

  // 随机决定本页是否混入
  if (Math.random() > 0.45) return pageLines;

  const result = [...pageLines];
  const pickCount = 1 + Math.floor(Math.random() * Math.min(3, mixSegments.length));

  for (let i = 0; i < pickCount; i += 1) {
    const segment = mixSegments[Math.floor(Math.random() * mixSegments.length)];
    const segmentLines = segment.split('\n');
    const insertAt = Math.floor(Math.random() * (result.length + 1));
    result.splice(insertAt, 0, ...segmentLines);
  }

  return result;
}

function splitLines(text) {
  const normalized = text.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const lines = normalized.split('\n');
  if (lines.length > 1 && lines[lines.length - 1] === '') {
    lines.pop();
  }
  return lines;
}

function cleanText(text) {
  const lines = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  // \u53BB\u9664\u6BCF\u884C\u672B\u5C3E\u7A7A\u683C
  const trimmed = lines.map(l => l.trimEnd());
  // \u53BB\u9664\u5F00\u5934\u7A7A\u884C
  while (trimmed.length > 0 && trimmed[0] === '') trimmed.shift();
  // \u53BB\u9664\u672B\u5C3E\u7A7A\u884C
  while (trimmed.length > 0 && trimmed[trimmed.length - 1] === '') trimmed.pop();
  // \u5408\u5E76\u8FDE\u7EED\u7A7A\u884C\u4E3A\u5355\u4E2A\u7A7A\u884C
  const result = [];
  for (let i = 0; i < trimmed.length; i += 1) {
    if (trimmed[i] === '' && result.length > 0 && result[result.length - 1] === '') {
      continue;
    }
    result.push(trimmed[i]);
  }
  return result.join('\n');
}

function wrapText(text, maxWidth = 30) {
  const lines = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  const result = [];
  for (const line of lines) {
    if (line === '') {
      result.push('');
      continue;
    }
    let remaining = line;
    while (remaining.length > maxWidth) {
      result.push(remaining.slice(0, maxWidth));
      remaining = remaining.slice(maxWidth);
    }
    if (remaining.length > 0) {
      result.push(remaining);
    }
  }
  return result.join('\n');
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function lastPageStart(totalLines, pageSize) {
  if (totalLines <= 0) return 0;
  const remainder = totalLines % pageSize;
  return Math.max(0, totalLines - (remainder || pageSize));
}

function getPage(lines, startLine, pageSize) {
  const totalLines = lines.length;
  const safePageSize = Math.max(1, Number(pageSize) || 10);
  const safeStart = clamp(Number(startLine) || 0, 0, lastPageStart(totalLines, safePageSize));
  const endLine = Math.min(totalLines, safeStart + safePageSize);
  const progressPercent = totalLines === 0 ? 0 : Math.round((safeStart / totalLines) * 1000) / 10;

  return {
    lines: lines.slice(safeStart, endLine),
    startLine: safeStart,
    endLine,
    totalLines,
    progressPercent,
  };
}

function movePage(currentLine, deltaPages, pageSize, totalLines) {
  const safePageSize = Math.max(1, Number(pageSize) || 10);
  const target = (Number(currentLine) || 0) + (Number(deltaPages) || 0) * safePageSize;
  return clamp(target, 0, lastPageStart(totalLines, safePageSize));
}

function lineFromPercent(percent, totalLines, pageSize) {
  const safePercent = clamp(Number(percent) || 0, 0, 100);
  const target = Math.floor((Number(totalLines) || 0) * (safePercent / 100));
  return clamp(target, 0, lastPageStart(Number(totalLines) || 0, Math.max(1, Number(pageSize) || 10)));
}

function stateKeyForFile(filePath) {
  return path.resolve(filePath);
}

function loadState() {
  try {
    const raw = fs.readFileSync(STATE_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : { files: {} };
  } catch (_error) {
    return { files: {} };
  }
}

function saveState(state) {
  fs.writeFileSync(STATE_FILE, `${JSON.stringify(state, null, 2)}\n`, 'utf8');
}

function saveReadingPosition(filePath, line) {
  const state = loadState();
  if (!state.files || typeof state.files !== 'object') {
    state.files = {};
  }
  state.files[stateKeyForFile(filePath)] = {
    line,
    updatedAt: new Date().toISOString(),
  };
  saveState(state);
}

function readSavedLine(filePath) {
  const state = loadState();
  const entry = state.files && state.files[stateKeyForFile(filePath)];
  return entry && Number.isInteger(entry.line) ? entry.line : 0;
}

function clearScreen(output = process.stdout) {
  output.write('\x1b[2J\x1b[3J\x1b[H');
}

function parseArgs(argv) {
  const options = {
    compact: false,
    encoding: 'auto',
    pageSize: 10,
    filePath: null,
    mixFile: null,
    help: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--compact') {
      options.compact = true;
    } else if (arg === '--help' || arg === '-h') {
      options.help = true;
    } else if (arg === '--encoding') {
      options.encoding = normalizeEncoding(argv[i + 1]);
      i += 1;
    } else if (arg.startsWith('--encoding=')) {
      options.encoding = normalizeEncoding(arg.slice('--encoding='.length));
    } else if (arg === '--page-size') {
      options.pageSize = Math.max(1, Number.parseInt(argv[i + 1], 10) || 10);
      i += 1;
    } else if (arg.startsWith('--page-size=')) {
      options.pageSize = Math.max(1, Number.parseInt(arg.slice('--page-size='.length), 10) || 10);
    } else if (arg === '--mix-file') {
      options.mixFile = argv[i + 1];
      i += 1;
    } else if (arg.startsWith('--mix-file=')) {
      options.mixFile = arg.slice('--mix-file='.length);
    } else if (!options.filePath) {
      options.filePath = arg;
    } else {
      throw new Error(`Unexpected argument: ${arg}`);
    }
  }

  return options;
}

function usage() {
  return [
    'Usage:',
    '  node novel-reader/reader.js <book.txt> [--compact] [--encoding auto|utf8|gbk] [--page-size 10] [--mix-file notes.txt]',
    '',
    'Commands:',
    '  Enter/n  next page',
    '  p        previous page',
    '  /        search next keyword',
    '  g        go to percent',
    '  c        clean extra blank lines & spaces, save & reload',
    '  w        wrap lines to 30 chars, set page-size to 3, save & reload',
    '  s        save position',
    '  q        save, clear screen, quit',
    '  ?        show help',
  ].join('\n');
}

function renderPage(output, lines, line, pageSize, filePath, encoding, compact, message, mixSegments) {
  clearScreen(output);
  const page = getPage(lines, line, pageSize);
  const displayLines = mixContent(page.lines, mixSegments);

  if (!compact) {
    const currentLine = page.totalLines === 0 ? 0 : page.startLine + 1;
    output.write(`${path.basename(filePath)}  ${page.progressPercent}%  line ${currentLine}/${page.totalLines}  ${encoding}\n\n`);
  }

  output.write(`${displayLines.join('\n')}\n`);

  if (message) {
    output.write(`\n${message}\n`);
  }

  if (!compact) {
    output.write('\n[Enter/n] next [p] prev [/] search [g] goto [s] save [q] quit [?] help\n');
  }
}

function findNextLine(lines, keyword, currentLine) {
  const trimmed = keyword.trim();
  if (!trimmed) return -1;

  for (let i = currentLine + 1; i < lines.length; i += 1) {
    if (lines[i].includes(trimmed)) return i;
  }
  for (let i = 0; i <= currentLine && i < lines.length; i += 1) {
    if (lines[i].includes(trimmed)) return i;
  }
  return -1;
}

async function runCli(argv = process.argv.slice(2), input = process.stdin, output = process.stdout) {
  const options = parseArgs(argv);
  if (options.help) {
    output.write(`${usage()}\n`);
    return 0;
  }
  if (!options.filePath) {
    output.write(`${usage()}\n`);
    return 1;
  }

  const filePath = path.resolve(options.filePath);
  const buffer = fs.readFileSync(filePath);
  const decoded = decodeNovelBuffer(buffer, options.encoding);
  const lines = splitLines(decoded.text);

  let mixFile = options.mixFile || HIDDEN_MIX_FILE;
  let mixSegments = null;
  if (mixFile) {
    mixSegments = loadMixSegments(path.resolve(mixFile));
  }

  let currentLine = readSavedLine(filePath);
  let message = '';

  const rl = readline.createInterface({ input, output });
  const ask = (prompt) => new Promise((resolve) => rl.question(prompt, resolve));

  try {
    while (true) {
      renderPage(output, lines, currentLine, options.pageSize, filePath, decoded.encoding, options.compact, message, mixSegments);
      message = '';
      const command = (await ask(options.compact ? '> ' : 'command> ')).trim();

      if (command === '' || command === 'n') {
        currentLine = movePage(currentLine, 1, options.pageSize, lines.length);
      } else if (command === 'p') {
        currentLine = movePage(currentLine, -1, options.pageSize, lines.length);
      } else if (command === '/') {
        const keyword = await ask('search> ');
        const foundLine = findNextLine(lines, keyword, currentLine);
        if (foundLine >= 0) {
          currentLine = foundLine;
          message = `found: line ${foundLine + 1}`;
        } else {
          message = 'not found';
        }
      } else if (command === 'g') {
        const percent = await ask('percent> ');
        currentLine = lineFromPercent(Number.parseFloat(percent), lines.length, options.pageSize);
      } else if (command === 'c') {
        const cleaned = cleanText(decoded.text);
        fs.writeFileSync(filePath, cleaned, 'utf8');
        decoded.text = cleaned;
        lines.length = 0;
        Array.prototype.push.apply(lines, splitLines(cleaned));
        currentLine = clamp(currentLine, 0, lastPageStart(lines.length, options.pageSize));
        message = 'cleaned & saved';
      } else if (command === 'w') {
        const wrapped = wrapText(decoded.text, 30);
        fs.writeFileSync(filePath, wrapped, 'utf8');
        decoded.text = wrapped;
        lines.length = 0;
        Array.prototype.push.apply(lines, splitLines(wrapped));
        options.pageSize = 3;
        currentLine = clamp(currentLine, 0, lastPageStart(lines.length, options.pageSize));
        message = 'wrapped to 30 chars/page, page-size set to 3';
      } else if (command === 's') {
        saveReadingPosition(filePath, currentLine);
        message = 'saved';
      } else if (command === '?') {
        message = usage();
      } else if (command === 'q') {
        saveReadingPosition(filePath, currentLine);
        clearScreen(output);
        break;
      } else {
        message = 'unknown command';
      }
    }
  } finally {
    rl.close();
  }

  return 0;
}

if (require.main === module) {
  runCli().then((code) => {
    process.exitCode = code;
  }).catch((error) => {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  });
}

module.exports = {
  decodeNovelBuffer,
  splitLines,
  cleanText,
  wrapText,
  getPage,
  movePage,
  lineFromPercent,
  stateKeyForFile,
  parseArgs,
  findNextLine,
  loadMixSegments,
  mixContent,
  runCli,
};
