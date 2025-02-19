import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import replace from 'rollup-plugin-replace';
//fs，postcss导出css，在css头部插入注释使用
import fs from 'fs';
async function appendBanner(cssPath, banner) {
  try {
    const existingCss = fs.readFileSync(cssPath, 'utf8');
    //在头部插入注释并写入文件
    fs.writeFileSync(cssPath, banner + existingCss);
    console.log(`Banner added to ${cssPath}`);
  } catch (err) {
    console.error(`Error appending banner to ${cssPath}:`, err);
  }
}
//获得文件头注释
import pkg from './package.json' assert { type: 'json' };
const now = new Date();
const times = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
//打包后的文件会丢失入口文件的注释，需要在这里插入，使用/*!可以避免css压缩min文件是被删掉
const note = `
/*!
 * @since Last modified: ${times}
 * @name AXUI front-end framework.
 * @version ${pkg.version}
 * @author AXUI development team <3217728223@qq.com>
 * @description The AXUI front-end framework is built on HTML5, CSS3, and JavaScript standards, with TypeScript used for type management.
 * @see {@link https://www.axui.cn|Official website}
 * @see {@link https://github.com/codady/axui/issues|github issues}
 * @see {@link https://gitee.com/codady/axui/issues|Gitee issues}
 * @see {@link https://www.npmjs.com/package/@codady/axui|NPM}
 * @issue QQ Group No.1:952502085
 * @copyright This software supports the MIT License, allowing free learning and commercial use, but please retain the terms 'ax,' 'axui,' 'AX,' and 'AXUI' within the software.
 * @license MIT license
 */
`;
export default [
  {
    //打包入口文件，esm格式
    input: './src/scripts/ax.js',
    output: [
      //使用目录dist，是为了方便css文件放到css目录里
      {
        //umd格式，网页终端可通过sript标签引用，兼容了cjs和amd，也可用于node环境
        dir: './dist/',
        format: 'umd',
        name: 'ax',
        //因为入口哦文件时ax.js，此处的[name]表示保持文件头一致，即为ax
        entryFileNames: 'js/[name].js',
        //头部插入注释
        banner: note,
      },
      {
        //esm格式，网页终端可通过import方式引用，也可用于node环境
        dir: './dist/',
        format: 'es',
        entryFileNames: 'js/[name].esm.js',
        banner: note,
      },
      {
        //cjs格式，必须在node环境下以require方式引用
        dir: './dist/',
        format: 'cjs',
        entryFileNames: 'js/[name].cjs.js',
        banner: note,
      },
    ],
    plugins: [
      //目前暂时删除注释
      {
        name: "remove-comments",
        transform(code) {
          //使用正则匹配删除 /* */ 注释
          const cleanedCode = code.replace(/\/\*[\s\S]*?\*\//g, "");
          return {
            code: cleanedCode,
            map: null,
          };
        },
      },
      postcss({
        //单独保存css文件；如果extract:true会根据js输出文件数量生成多个css文件；如果不填或者为false则将样式文件写到js里，不单独生成css文件
        extract: 'css/ax.css',
        plugins: [],
      }),
      //Solve the problem："Unresolved dependencies" 解决引入外部包提示“Unresolved dependencies”
      resolve(),
      //打包结束，在css头部插入注释
      {
        name: 'bundleEnd',
        closeBundle() {
          appendBanner('./dist/css/ax.css', note);
        },
      },
    ],
  },
  /*  {
     //打包英文版本
     input: './src/scripts/ax.js',
     output: [
       {
         dir: './dist/',
         format: 'umd',
         name: 'ax',
         entryFileNames: 'js/ax.en.js',
         banner: note,
       },
       {
         dir: './dist/',
         format: 'es',
         entryFileNames: 'js/ax.en.esm.js',
         banner: note,
       },
       {
         dir: './dist/',
         format: 'cjs',
         entryFileNames: 'js/ax.en.cjs.js',
         banner: note,
       },
     ],
     plugins: [
       postcss({
         extract: 'css/ax.en.css',
         plugins: [],
       }),
       resolve(),
       {
         name: 'bundleEnd',
         closeBundle() {
           appendBanner('./dist/css/ax.en.css', note);
         },
       },
       replace({
         //打包前替换en语言包名称
         'zh-CN': 'en-US',
         //替换打包的css文件
         'ax.less': 'ax.en.less',
         preventAssignment: true,
       }),
     ],
   }, */
]
