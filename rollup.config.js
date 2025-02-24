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
  //Solve the problem："Unresolved dependencies" 解决引入外部包提示“Unresolved dependencies”
  resolve(),
]
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
      replace({
        //因为umd格式需要打包所有组件并且直接可用，需要传递环境变量，在入口文件中识别
        //此处需要使用JSON.stringify确保传递的是文本
        'process.env.BUILD_FORMAT': JSON.stringify('umd'),
        preventAssignment: true,
      }),
      ...sharePlugins,
    ],
  },
  {
    //打包入口文件，esm格式
    input: './src/scripts/ax.js',
    output:
    {
      //esm格式，网页终端可通过import方式引用，也可用于node环境
      dir: './dist/',
      format: 'es',
      entryFileNames: 'js/[name].esm.js',
      banner: note,
    },
    plugins: [
      replace({
        'process.env.BUILD_FORMAT': JSON.stringify('esm'),
        preventAssignment: true,
      }),
      ...sharePlugins
    ],
  },
  {
    //打包入口文件，esm格式
    input: './src/scripts/ax.js',
    output:
    {
      //cjs格式，必须在node环境下以require方式引用
      dir: './dist/',
      format: 'cjs',
      entryFileNames: 'js/[name].cjs.js',
      banner: note,
    },
    plugins: [
      replace({
        'process.env.BUILD_FORMAT': JSON.stringify('cjs'),
        preventAssignment: true,
      }),
      ...sharePlugins
    ],
  },
  /* {
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
        plugins: [
          replace({
            'process.env.BUILD_FORMAT': JSON.stringify('umd'), // 为 UMD 格式设置环境变量
            preventAssignment: true,
          }),
        ],
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
      replace({
        'process.env.BUILD_FORMAT': 'umd',
        preventAssignment: true, // 防止错误的赋值
      }),
      //动态替换内容

    ],
  }, */
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
