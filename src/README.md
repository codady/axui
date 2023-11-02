# 使用方法

#### 1、首先打包ax.js文件
确认rollup.config.js的参数如下：
export default {
  input:'./src/index.js',
  output:{
    file:'./dist/js/ax.js',
    format:'cjs',
  },
}
index.js为打包入口文件，运行rollup的打包程序将在dist/js目录下生成ax.js文件。

#### 2、其次打包ax.css文件
package.ps1为powershell批处理文件，它将检查ax.js文件中使用到的模块，然后从src/css目录中找到匹配的css文件，继而打包成ax.css文件存放到dist/css目录下。
该批处理文件在打包完ax.css文件后，自动对ax.js和ax.css进行压缩处理，生成ax.min和ax.min.js文件。