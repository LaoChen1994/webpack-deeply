const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')
const HappyPack = require('happypack')

const happyThreadPool = HappyPack.ThreadPool({ size: 5 })

module.exports = {
  entry: {
    login1: path.resolve(__dirname, './src/login/index.js'),
    login2: path.resolve(__dirname, './src/login2/index.js'),
    login3: path.resolve(__dirname, './src/login3/index.js'),
    welcome: path.resolve(__dirname, './src/welcome/index.js')
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist/"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'happypack/loader?id=jsx',
        include: [path.resolve(__dirname, './src')],
        exclude: /node_modules/
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
        ],
        include: [path.resolve(__dirname, './src')],
        exclude: /node_modules/
      },
    ],
    // noParse: [/react-dom\.production.min\.js/, /react\.production\.min\.js/],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './template.html'),
      filename: 'login.html',
      chunks: ['login'],
      title: 'login SPA Test'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './template.html'),
      filename: 'welcome.html',
      chunks: ['welcome'],
      title: 'welcome SPA Test'
    }),
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    }),
    new DllReferencePlugin({
      manifest: require('./manifest/react.manifest.json'),
      context: __dirname
    }),
    new DllReferencePlugin({
      manifest: require('./manifest/utils.manifest.json'),
      context: __dirname
    }),
    new HappyPack({
      id: 'jsx',
      loaders: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              cacheDirectory: true
            },
          },
        ],
        threads: 5,
        verbose: false,
        threadPool: happyThreadPool
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", '.tsx', '.ts'],
    modules: [path.resolve(__dirname, '../node_modules')]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      name: 'vendor_js'
    }
  }
};
