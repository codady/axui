import resolve from '@rollup/plugin-node-resolve';
import replace from 'rollup-plugin-replace';
//自定义的文件头注释
import note from './script-note.js';

//共有插件
const sharePlugins = [
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
  //npm run all才执行replace方法
  process.env.REPLACE === 'true' && replace({
  //防止替换赋值表达式
    preventAssignment: true,
    //将console.log替换为空字符串,平时测试需要使用console.log
    'console.log': '', 
  }),
  //Solve the problem："Unresolved dependencies" 解决引入外部包提示“Unresolved dependencies”
  resolve(),
].filter(Boolean);
export default [
  {
    //打包入口文件，esm格式
    input: './src/scripts/ax.js',
    output:
    {
      //使用目录dist，是为了方便css文件放到css目录里,umd格式，网页终端可通过sript标签引用，兼容了cjs和amd，也可用于node环境
      dir: './dist/',
      format: 'umd',
      name: 'ax',
      //因为入口哦文件时ax.js，此处的[name]表示保持文件头一致，即为ax
      entryFileNames: 'js/[name].js',
      //头部插入注释
      banner: note,
    },
    plugins: [
      ...sharePlugins,
    ],
  },
  {
    //打包入口文件，esm格式
    input: './src/scripts/ax.comm.js',
    output:
    {
      //esm格式，网页终端可通过import方式引用，也可用于node环境
      dir: './dist/',
      format: 'es',
      entryFileNames: 'js/ax.esm.js',
      banner: note,
    },
    plugins: [
      ...sharePlugins
    ],
  },
  {
    //打包入口文件，esm格式
    input: './src/scripts/ax.comm.js',
    output:
    {
      //cjs格式，必须在node环境下以require方式引用
      dir: './dist/',
      format: 'cjs',
      entryFileNames: 'js/ax.cjs.js',
      banner: note,
    },
    plugins: [
      ...sharePlugins
    ],
  },
]
