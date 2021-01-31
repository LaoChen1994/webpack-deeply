const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DefinePlugin = require("webpack/lib/DefinePlugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    login: path.resolve(__dirname, './src/login/index.js'),
    welcome: path.resolve(__dirname, './src/login/index.js')
  },
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
      filename: 'login.html',
      chunks: ['login'],
      title: 'login SPA Test'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './template.html'),
      filename: 'welcome.html',
      chunks: ['welcome'],
      title: 'welcome SPA Test'
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
