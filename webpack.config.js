const path = require("path");
const isProduction = process.env.NODE_ENV === "production";
module.exports = {
  mode: isProduction ? "production" : "development",
  entry: "./src/ts/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/js"),
  },
};

if (process.env.NODE_ENV !== "production") {
  module.exports.devtool = "inline-source-map";
  module.exports.mode = "development";
}
