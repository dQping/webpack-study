const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    //publicPath: "https://cdn.example.com/assets/",

    // __dirname 表示当前文件（wenpack.config.js所在的目录路径）
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      // 打包 sass 文件
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 指定 文件中 @import 的文件在引入之前也需要走 2 个 loader
          {
            loader: "css-loader",
            options: { importLoaders: 2 }
          },
          "sass-loader",
          "postcss-loader"
        ]
      },
      // 打包 less 文件
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 2, modules: true }
          },
          "less-loader",
          "postcss-loader"
        ]
      },
      // 打包 字体 文件
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]_[hash].[ext]",
              outoutPath: "asset/font/"
            }
          }
        ]
      },
      // 打包图片
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]_[hash].[ext]",
              outoutPath: "asset/mages/",
              limit: 8192
            }
          }
        ]
      },
      // 使用 babel 转换 ES6 语法
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       plugins: [
      //         [
      //           "@babel/plugin-transform-runtime",
      //           {
      //             absoluteRuntime: false,
      //             corejs: 2,
      //             helpers: true,
      //             regenerator: true,
      //             useESModules: false
      //           }
      //         ]
      //       ]
      //     }
      //   }
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
      //filename: "test.html"
    }),
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].css"
    })
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  }
};
