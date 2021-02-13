"use strict";
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-react",
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      chrome: 44,
                      edge: 11,
                    },
                  },
                ],
              ],
              plugins: [
                "@babel/plugin-transform-runtime",
                "@babel/plugin-transform-modules-commonjs"
              ],
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/i,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            }
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
