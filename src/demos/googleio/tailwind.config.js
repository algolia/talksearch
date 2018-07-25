/* eslint-disable import/no-commonjs */
const _ = require('lodash');
const defaultConfig = require('../../../tailwind.config.js');

module.exports = _.merge(defaultConfig, {
  colors: {
    blue: '#4768FD',
    'blue-50': 'rgba(71, 104, 253, .50)',
  },
});
