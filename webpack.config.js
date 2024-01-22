const path = require("path");
const miniCss = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: "style-loader",
            options: {
              insert: "head", // insert style tag inside of <head>
              injectType: "singletonStyleTag", // this is for wrap all your style in just one style tag
            },
          },
          {
            loader: miniCss.loader,
            options: {
              esModule: false,
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.html$/i,
        use: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html",
    }),
    new miniCss({
      filename: "style.css",
    }),
  ],
  devServer: {
    watchFiles: "./",
    port: 9000,
    client: {
      overlay: false,
    },
  },
};
