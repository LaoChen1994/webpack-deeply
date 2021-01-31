const path = require("path");
const webpack = require('webpack')

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|png)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 3000,
            name: "[name].[ext]"
          }
        }],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ],
        parser: {
          commonjs: true,
        }
      }
    ],
  },
  resolve: {
    alias: {
      '@/utils': path.resolve(__dirname, './src/utils/')
    },
    modules: ['./src/common', 'node_modules']
  },
  plugins: [
    // 使用dll插件打包库，可以在webpack重新编译的过程中跳过这些库
    // 提升编译效率
    new webpack.DllPlugin({
      name: '[name]_dll_[chunkhash]',
      path: path.resolve(__dirname, './dist/', "[name]_minifeast.json")
    })
  ],
  target: "web",
  watch: true,
  cache: true,
  profile: true
  // watchOptions: {
  //   ignored:/node_modules|utils/,
  // }
};
