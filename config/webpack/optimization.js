const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  optimizationConfig: (isDevelopment) =>
    !isDevelopment
      ? {
          minimize: true,
          minimizer: [new TerserPlugin({ extractComments: false })],
        }
      : {},
};
