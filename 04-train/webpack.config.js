const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/pages/index.ts'),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, './dist/')
  },
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [{
        test: /\.ts$/,
        use: [{
          loader: 'ts-loader',
          options: {
          },
        }],
        exclude: /node_modules/
      }, 
      {
        test: /\.s(c|a)ss/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader', 
            options: {}
          }, 
          'sass-loader'
        ]
      }
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
}