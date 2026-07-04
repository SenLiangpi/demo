# Novel Reader

零依赖 Node 命令行本地小说阅读器，面向 Windows CMD / PowerShell 使用。它只读取本地 `.txt` 文件，不联网，不安装依赖。

## 使用

```bash
node novel-reader/reader.js novel-reader/sample.txt
node novel-reader/reader.js novel-reader/sample.txt --compact
node novel-reader/reader.js novel-reader/sample.txt --encoding gbk --page-size 8
```

## 命令

```text
Enter/n  下一页
p        上一页
/        搜索关键词
g        跳到百分比进度
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

## 测试

```bash
node --test novel-reader/reader.test.js
```
