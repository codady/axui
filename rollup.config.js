export default [
  {
    input: './src/js/index.js',
    output: [{
      file: './dist/js/ax.js',
      format: 'umd',
      name: 'ax',
    }, {
      file: './dist/js/ax.esm.js',
      format: 'es',
    }, {
      file: './dist/js/ax.cjs.js',
      format: 'cjs',
    }]
  },
]
