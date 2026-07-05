# Novel Reader

零依赖 Node 命令行本地小说阅读器，面向 Windows CMD / PowerShell 使用。它只读取本地 `.txt` 文件，不联网，不安装依赖。

## 使用

```bash
node novel-reader/reader.js novel-reader/sample.txt
node novel-reader/reader.js novel-reader/sample.txt --compact
node novel-reader/reader.js novel-reader/sample.txt --encoding gbk --page-size 8
node novel-reader/reader.js novel-reader/sample.txt --mix-file notes.txt
```

## 命令

```text
Enter/n  下一页
p        上一页
/        搜索关键词
g        跳到百分比进度
c        清理多余空行和末尾空格，保存并重新加载
w        按每行 30 字折行，页大小设为 3，保存并重新加载
s        保存当前位置
q        保存、清屏、退出
?        显示帮助
```

阅读进度保存在 `novel-reader/.reader-state.json`，按小说文件的绝对路径记录。

## 编码

默认 `--encoding auto` 会先尝试 UTF-8，失败后用 GBK。也可以显式指定：

```bash
node novel-reader/reader.js book.txt --encoding gbk
node novel-reader/reader.js book.txt --encoding utf8
```

GBK 支持依赖 Node 内置 `TextDecoder('gbk')`。常规 Windows 版 Node 支持该编码。

## 文本清理 (`c`)

有些小说含多余空行或行末空格，按 `c` 键可：

- 去除每行末尾空格
- 去除文件开头和末尾的空行
- 合并连续空行为单个空行
- 修改直接写入原文件并重新加载

## 文本折行 (`w`)

有些行文字过长导致单页内容过多，按 `w` 键可：

- 将每行按 30 字硬折行
- 页大小自动设为 3 行/页
- 修改直接写入原文件并重新加载

## 内容混入

### 命令行方式

指定 `--mix-file` 可引入一个外部 txt/md 文件，阅读器会将其按空行拆分为段落，随机混入当前阅读页中：

```bash
node novel-reader/reader.js book.txt --mix-file notes.txt
node novel-reader/reader.js book.txt --mix-file=comments.md
```

### 隐蔽行方式

编辑 `reader.js` 顶部的 `HIDDEN_MIX_FILE` 变量，将其指向一个 txt/md 文件路径，启动后内容自动混入，无需每次传参：

```js
// reader.js 第 12 行
const HIDDEN_MIX_FILE = '/path/to/hidden-notes.txt';
```

- `--mix-file` 优先级高于 `HIDDEN_MIX_FILE`
- 每页约有 45% 概率触发混入
- 每次随机选取 1~3 个段落，插入页面随机位置
- 混入文件也支持 `auto` 编码检测（UTF-8 / GBK）

## 测试

```bash
node --test novel-reader/reader.test.js
```
