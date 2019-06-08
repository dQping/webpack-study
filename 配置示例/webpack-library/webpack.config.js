const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "util.js",
    // 配置支持 <script> 标签引入
    library: "myutil",
    // libraryTarget 配置支持引入的方式
    libraryTarget: "umd"
  }
  // ... 省略以下其他各种配置项
};
