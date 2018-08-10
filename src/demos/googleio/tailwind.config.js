/* eslint-disable import/no-commonjs */
const _ = require('lodash');
const defaultConfig = require('../../../tailwind.config.js');

const colors = {
  blue: '#4768FD',
  'blue-50': 'rgba(71, 104, 253, .50)',
};

module.exports = _.merge({}, defaultConfig, {
  colors,
  backgroundColors: colors,
  borderColors: colors,
  textColors: colors,
});
