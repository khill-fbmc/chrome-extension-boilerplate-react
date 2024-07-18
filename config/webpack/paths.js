const path = require("node:path");

const projectRoot = path.join(__dirname, "..", "..");
const sourceRoot = path.join(projectRoot, "src");
const pagesPath = path.join(sourceRoot, "pages");

const panelPath = path.join(pagesPath, "Panel");
const popupPath = path.join(pagesPath, "Popup");
const newtabPath = path.join(pagesPath, "Newtab");
const optionsPath = path.join(pagesPath, "Options");
const contentPath = path.join(pagesPath, "Content");
const devtoolsPath = path.join(pagesPath, "Devtools");
const backgroundPath = path.join(pagesPath, "Background");

module.exports = {
  projectRoot,
  sourceRoot,
  pagesPath,
  entryPaths: {
    newtab: path.join(newtabPath, "index.jsx"),
    options: path.join(optionsPath, "index.jsx"),
    popup: path.join(popupPath, "index.jsx"),
    background: path.join(backgroundPath, "index.js"),
    contentScript: path.join(contentPath, "index.js"),
    devtools: path.join(devtoolsPath, "index.js"),
    panel: path.join(panelPath, "index.jsx"),
  },
  outputPath: path.resolve(projectRoot, "build"),
  htmlTemplates: {
    newtab: path.join(newtabPath, "index.html"),
    options: path.join(optionsPath, "index.html"),
    popup: path.join(popupPath, "index.html"),
    devtools: path.join(devtoolsPath, "index.html"),
    panel: path.join(panelPath, "index.html"),
  },
};
