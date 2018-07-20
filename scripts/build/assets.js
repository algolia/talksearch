import pify from 'pify';
import cpx from 'cpx';
const copy = pify(cpx.copy);

export default {
  async run() {
    return await copy('./src/assets/*', './dist/assets', { clean: true });
  },

  watch() {
    cpx.watch('./src/assets/*', './dist/assets');
  },
};
