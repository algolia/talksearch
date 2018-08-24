/* eslint-disable import/no-commonjs */
const _ = require('lodash');
const defaultConfig = require('../../../tailwind.config.js');

const colors = {
  blue: '#0f0d30',
  green: '#39aa68',
};

module.exports = _.merge({}, defaultConfig, {
  colors,
  backgroundColors: colors,
  borderColors: colors,
  textColors: colors,
});
