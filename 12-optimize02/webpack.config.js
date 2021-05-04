const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/demo/index.js'),
    b: path.resolve(__dirname, './src/demo/b.js'),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist/"),
    // publicPath: "http://127.0.0.1:8001/js/"
  },
  mode: "production",
  stats: {
    usedExports: true
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    modules: false,
                  },
                ],
              ],
              cacheDirectory: true,
            },
          },
        ],
        include: [path.resolve(__dirname, "./src")],
      },
      {
        test: /\.css/,
        use: [
          "style-loader", 
          MiniCssExtractPlugin.loader, 
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]_[contenthash:8].css",
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/demo/template.html"),
      // publicPath: 'http://127.0.0.1:3000/css/'
    }),
  ],
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true, // 可省略，默认开启并行
        terserOptions: {
            toplevel: true, // 最高级别，删除无用代码
            ie8: true,
            safari10: true,
        }
      })
    ],
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      cacheGroups: {
        base: {
          usedExports: true,
          name: 'base',
          test: /node_modules/
        },
        common: {
          usedExports: true,
          name: 'common',
          chunks: 'all',
          minChunks: 2,
          test: /src/,
          minSize: 0,
          reuseExistingChunk: true
        },
      }
    }
  }
};
