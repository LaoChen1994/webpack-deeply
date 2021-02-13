'use strict';
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const path = require('path');
const { merge } = require('webpack-merge')
const common = require('./config/webpack.common')

module.exports = merge(common, {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [new MiniCssExtractPlugin()],
  externals: /^(babel-runtime|react)/,
});
