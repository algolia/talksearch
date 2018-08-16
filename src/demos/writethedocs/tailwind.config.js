/* eslint-disable import/no-commonjs */
const _ = require('lodash');
const defaultConfig = require('../../../tailwind.config.js');

const colors = {
  grey: '#3e4349',
  blue: '#004B6B',
};

module.exports = _.merge({}, defaultConfig, {
  colors,
  backgroundColors: colors,
  borderColors: colors,
  textColors: colors,
});
