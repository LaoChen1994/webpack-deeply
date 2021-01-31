const path = require('path')

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    a: './a.js',
    b: './test/b.js',
    c: './test/c.js',
    merge: ['./merge/c.js', './merge/d.js']
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, './dist'),
    library: 'myTest',
    libraryTarget: 'commonjs2'
  },
  mode: 'development'
}