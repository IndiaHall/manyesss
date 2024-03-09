function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size;
}

// 示例用法
const fileSize = getFileSize('example.txt');
console.log("文件大小:", fileSize, "bytes");

function readFileContent(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

// 示例用法
const fileContent = readFileContent('example.txt');
console.log("文件内容:", fileContent);