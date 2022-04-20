const path = require("path");
const CopyWebPackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index.js",
  },
  mode: "development",
  plugins: [
    new CopyWebPackPlugin({
      patterns: [{ from: "./index.html", to: "./" }],
    }),
  ],
};
