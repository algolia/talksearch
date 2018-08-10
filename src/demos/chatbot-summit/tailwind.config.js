/* eslint-disable import/no-commonjs */
const _ = require('lodash');
const defaultConfig = require('../../../tailwind.config.js');

const colors = {
  pink: '#e4287d',
};

module.exports = _.merge({}, defaultConfig, {
  colors,
  backgroundColors: colors,
  borderColors: colors,
  textColors: colors,
});
