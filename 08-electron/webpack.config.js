const path = require("path");
const DefinePlugin = require("webpack/lib/DefinePlugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src/app.js'),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist/"),
  },
  // target: 'electron-renderer',
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
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      path: path.resolve(__dirname, './dist/'),
      template: path.resolve(__dirname, './template.html')
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
