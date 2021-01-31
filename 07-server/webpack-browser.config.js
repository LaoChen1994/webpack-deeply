const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/pages/browser.js"),
  output: {
    filename: "build-browser.js",
    path: path.resolve(__dirname, "./dist/"),
  },
  mode: 'development',
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
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
