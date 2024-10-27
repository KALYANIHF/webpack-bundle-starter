const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  // this is the development mode
  mode: "development",
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },

  // this is the output section for webpack
  output: {
    path: path.resolve(__dirname, "dev"),
    filename: "[name].js",
  },
  // this is the loder section for webpack
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
            },
          },
        ],
      },
    ],
  },
  // dev server section in webpack
  devServer: {
    static: {
      directory: path.join(__dirname, "dev"),
    },
    compress: true,
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  // plugin section in webpack
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["main"],
      inject: true,
      title: "Webpack App",
      favicon: "./src/images/seo.png",
      meta: {
        viewport: "width=device-width, initial-scale=1",
        description:
          "this is a webpack project to test the bundle feature of the webpack bundler",
      },
    }),
  ],
};
