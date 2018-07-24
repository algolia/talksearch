/* eslint-disable import/no-commonjs */
const _ = require('lodash');
const defaultConfig = require('../../../tailwind.config.js');

module.exports = _.merge(defaultConfig, {
  colors: {
    grey: '#1f1f1f',
    yellow: '#fadf1d',
  },
});
