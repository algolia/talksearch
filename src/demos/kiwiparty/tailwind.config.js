/* eslint-disable import/no-commonjs */
const _ = require('lodash');
const defaultConfig = require('../../../tailwind.config.js');

const colors = {
  green: '#82941f',
};

module.exports = _.merge(defaultConfig, {
  colors,
  borderColors: colors,
  textColors: colors,
});
