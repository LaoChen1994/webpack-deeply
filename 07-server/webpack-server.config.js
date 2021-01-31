const path = require("path");
const nodeExternals = require("webpack-node-externals");
const fs = require("fs");

module.exports = {
  entry: path.resolve(__dirname, "./src/pages/server.js"),
  output: {
    filename: "build-server.js",
    path: path.resolve(__dirname, "./dist/"),
    libraryTarget: "commonjs2",
  },
  target: "node",
  mode: 'development',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          },
        ],
        exclude: path.resolve(__dirname, "../node_modules"),
      },
      {
        test: /\.css$/,
        use: ["ignore-loader"],
      },
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
