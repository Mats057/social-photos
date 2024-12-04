const HtmlWebPackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
module.exports = {
  devtool: "source-map",
  entry: "./src/main.tsx",
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx', 'mjs'],
        emitWarning: true,
        overrideConfigFile: "./eslint.config.mjs",
        configType: "flat",
      }),
  ],
};
