/* eslint-disable import/no-commonjs */
const _ = require('lodash');
const defaultConfig = require('../../../tailwind.config.js');

const colors = {
  blue: '#28617d',
};

module.exports = _.merge({}, defaultConfig, {
  colors,
  backgroundColors: colors,
  borderColors: colors,
  textColors: colors,
});
