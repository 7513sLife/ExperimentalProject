"use strict" ;
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
          cacheDirectory: true,
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".ts", ".tsx"] },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist"
  },
  devServer: {
    hot: true,
    port: 3000,
    client: {
      logging: "error"
    }
  },
  devtool: "eval-source-map"
};