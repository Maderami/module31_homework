const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.[chunkhash].js",
    path: path.resolve(__dirname, "public"),
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new HTMLPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    fallback: {
       "fs": false,
       "tls": false,
       "net": false,
       async_hooks: false,
       "buffer": require.resolve("buffer"),
       "path": require.resolve("path-browserify"),
       "util": require.resolve("util"),
       "stream": require.resolve("stream-browserify"),
       "zlib": require.resolve("browserify-zlib"),
       "assert": require.resolve("assert"),
       "crypto": require.resolve("crypto-browserify"),
       "http": require.resolve("stream-http"),
       "os": require.resolve("os-browserify/browser"),
       "vm": require.resolve("vm-browserify"),
       "path": require.resolve("on-finished"),
       "path": require.resolve("raw-body"),
       // Add other core modules as needed
    },
 }
};
 