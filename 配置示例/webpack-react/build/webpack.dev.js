const path = require("path");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const webpack = require("webpack");

const devConfig = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",

  output: {
    filename: "[name].js",
    chunkFilename: "[name].js"
  },

  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 9001,
    compress: true,
    open: true,
    hot: true,
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = merge(commonConfig, devConfig);
