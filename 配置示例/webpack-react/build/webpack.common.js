const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.scss/,
        use: [
          //"style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          "sass-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]_[hash].[ext]",
              outputPath: "asset/font/"
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif)/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]_[hash].[ext]",
              outputPath: "asset/images/",
              limit: 10240
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].css"
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "asset/style/main",
          test: /\.scss$/,
          chunks: "all",
          enforce: true
        }
      }
    },
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  }
};
