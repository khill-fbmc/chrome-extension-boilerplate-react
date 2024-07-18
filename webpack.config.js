const {
  entryPaths,
  outputPath,
  htmlTemplates,
} = require('./config/webpack/paths');
const { commonPlugins, htmlPlugins } = require('./config/webpack/plugins');
const { moduleRules, fileExtensions } = require('./config/webpack/rules');
const { optimizationConfig } = require('./config/webpack/optimization');

const env = process.env.NODE_ENV;
const isDevelopment = env !== 'production';

module.exports = {
  mode: env || 'development',
  entry: entryPaths,
  output: {
    filename: '[name].bundle.js',
    path: outputPath,
    clean: true,
    publicPath: process.env.ASSET_PATH || '/',
  },
  module: {
    rules: moduleRules,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'].concat(
      fileExtensions.map((ext) => `.${ext}`)
    ),
  },
  plugins: [
    ...commonPlugins, //
    ...htmlPlugins(htmlTemplates),
  ],
  optimization: optimizationConfig(isDevelopment),
  infrastructureLogging: {
    level: 'info',
  },
  devtool: isDevelopment ? 'cheap-module-source-map' : false,
};
