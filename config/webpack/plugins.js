const path = require("node:path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  commonPlugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new CleanWebpackPlugin({ verbose: false }),
    new webpack.ProgressPlugin(),
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/manifest.json",
          to: path.join(__dirname, "..", "build"),
          force: true,
          transform: (content) =>
            Buffer.from(
              JSON.stringify({
                description: process.env.npm_package_description,
                version: process.env.npm_package_version,
                ...JSON.parse(content.toString()),
              })
            ),
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/pages/Content/content.styles.css",
          to: path.join(__dirname, "..", "build"),
          force: true,
        },
        {
          from: "src/assets/img/icon-128.png",
          to: path.join(__dirname, "..", "build"),
          force: true,
        },
        {
          from: "src/assets/img/icon-34.png",
          to: path.join(__dirname, "..", "build"),
          force: true,
        },
      ],
    }),
  ].filter(Boolean),

  htmlPlugins: (htmlTemplates) => [
    new HtmlWebpackPlugin({
      template: htmlTemplates.newtab,
      filename: "newtab.html",
      chunks: ["newtab"],
      cache: false,
    }),
    new HtmlWebpackPlugin({
      template: htmlTemplates.options,
      filename: "options.html",
      chunks: ["options"],
      cache: false,
    }),
    new HtmlWebpackPlugin({
      template: htmlTemplates.popup,
      filename: "popup.html",
      chunks: ["popup"],
      cache: false,
    }),
    new HtmlWebpackPlugin({
      template: htmlTemplates.devtools,
      filename: "devtools.html",
      chunks: ["devtools"],
      cache: false,
    }),
    new HtmlWebpackPlugin({
      template: htmlTemplates.panel,
      filename: "panel.html",
      chunks: ["panel"],
      cache: false,
    }),
  ],
};
