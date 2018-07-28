/* eslint-disable import/no-commonjs */
const _ = require('lodash');
const defaultConfig = require('../../../tailwind.config.js');

module.exports = _.merge(defaultConfig, {
  colors: {
    blue: '#181899',
    'light-blue': '#2a7df1',
  },
});
