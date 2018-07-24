import pify from 'pify';
import cpx from 'cpx';
const copy = pify(cpx.copy);

const sourcePattern = './src/{assets,demos}/**/*.{gif,png,svg}';

export default {
  async run() {
    return await copy(sourcePattern, './dist', { clean: true });
  },

  watch() {
    cpx.watch(sourcePattern, './dist/assets');
  },
};
