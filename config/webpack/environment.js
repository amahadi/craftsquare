
const { environment } = require("@rails/webpacker");
const webpack = require("webpack");

const dotenv = require("./dotenv");

dotenv.loadEnv();

environment.plugins.prepend(
  "Environment",
  new webpack.EnvironmentPlugin(process.env)
);

environment.config.set("output.filename", (chunkData) => {
  // if the filename is 'homemade' then exclude the chunk hash
  if (chunkData.chunk.name === "homemade") return "homemade.js";
  // otherwise fingerprint
  return "[name]-[chunkhash].js";
});

// environment.plugins.append(
//   'MiniCssExtractPlugin',
//   new MiniCssExtractPlugin({ filename: 'css/[name].css' })
// );

//Add custom configuration to webpack
// const customConfig = {
//   resolve: {
//     extensions: ['.css']
//   }
// }
//
// // Merge custom config
// environment.config.merge(customConfig)

module.exports = environment;
