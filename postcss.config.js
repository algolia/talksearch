/* eslint-disable import/no-commonjs */
const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');

const pluginList = [
  atImport, // Import dependencies from node_modules
  autoprefixer, // Crossbrowser compat
];

module.exports = {
  plugins: pluginList,
};
