/* eslint-disable import/no-commonjs */
const _ = require('lodash');
const defaultConfig = require('../../../tailwind.config.js');

module.exports = _.merge(defaultConfig, {
  colors: {
    purple: '#2a255a',
    red: '#e4504b',
  },
});
