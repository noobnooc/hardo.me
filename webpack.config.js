const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: path.join(__dirname, "src", "js", "main.js"),
  output: {
    filename: "bundle-[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, "src", "js")],
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "bower_components")
        ],
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html")
    }),
    new CleanWebpackPlugin("dist/*.*", {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, "assets"), to: path.join(__dirname, "dist") }
    ]),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: [".json", ".js", ".jsx", ".css"]
  },
  devtool: "source-map",
  devServer: {
    inline: true,
    hot: true,
  }
};
