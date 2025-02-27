import fs from 'fs/promises';
import less from 'less';
import path from 'path';
//自定义的文件头注释
import note from './script-note.js';
// 配置
const inputLessFile = './src/styles/ax.less'; // 输入的 .less 文件路径
const outputCssFile = './dist/css/ax.css';   // 输出的 .css 文件路径
// 递归解析 LESS 文件中的 @import
async function resolveLessImports(filePath, baseDir = '') {
  const fullPath = path.join(baseDir, filePath);
  const content = await fs.readFile(fullPath, 'utf8');

  // 匹配 @import 语句
  const importRegex = /@import\s+['"](.+?)['"];/g;
  let match;
  let resolvedContent = content;

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    const importFullPath = path.join(path.dirname(fullPath), importPath);
    const importedContent = await resolveLessImports(importPath, path.dirname(fullPath));
    resolvedContent = resolvedContent.replace(match[0], importedContent);
  }

  return resolvedContent;
}

// 将 .less 文件转换为 .css
async function compileLessToCss(lessFilePath) {
  try {
    const lessContent = await resolveLessImports(lessFilePath); // 解析所有 @import
    const result = await less.render(lessContent, {
      paths: [path.dirname(lessFilePath)], // 设置 LESS 解析路径
    });
    return result.css; // 返回生成的 CSS 内容
  } catch (error) {
    console.error('Error compiling LESS:', error);
    process.exit(1);
  }
}

// 确保目录存在（递归创建目录）
async function ensureDir(dirPath) {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (error) {
    console.error('Error creating directory:', error);
    process.exit(1);
  }
}

// 将 CSS 内容写入文件
async function writeCssFile(cssContent, outputPath) {
  try {
    await ensureDir(path.dirname(outputPath)); // 确保输出目录存在
    const finalCssContent = note + cssContent; // 添加注释
    await fs.writeFile(outputPath, finalCssContent, 'utf8');
    console.log(`CSS file saved to: ${outputPath}`);
  } catch (error) {
    console.error('Error writing CSS file:', error);
    process.exit(1);
  }
}

// 主函数
async function main() {
  const cssContent = await compileLessToCss(inputLessFile); // 编译 LESS 为 CSS
  await writeCssFile(cssContent, outputCssFile);           // 写入 CSS 文件
}

// 运行主函数
main();