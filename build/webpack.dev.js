const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const devConfig = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  output: {
    filename: "[name].js",
    chunkFilename: "[name].js"
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 9000,
    compress: true,
    open: true,
    hot: true
    //hotOnly: true
  },
  optimization: {
    usedExports: true
  }
};

module.exports = merge(commonConfig, devConfig);
