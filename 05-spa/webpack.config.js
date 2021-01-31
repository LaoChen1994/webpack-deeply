const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DefinePlugin = require("webpack/lib/DefinePlugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist/"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/i,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './template.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
