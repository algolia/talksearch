/* eslint-disable import/no-commonjs */
const _ = require('lodash');
const defaultConfig = require('../../../tailwind.config.js');

module.exports = _.merge(defaultConfig, {
  colors: {
    blue: '#00F6F6',
    grey: '#38383f',
    yellow: '#d3b771',
  },
});
