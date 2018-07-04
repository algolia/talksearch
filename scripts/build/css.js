import helper from './helper';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import atImport from 'postcss-import';
import path from 'path';
import pMap from 'p-map';

export default {
  COMPILER: null,
  // Return the postcss compiler
  compiler() {
    if (this.COMPILER) {
      return this.COMPILER;
    }
    return (this.COMPILER = postcss([atImport, autoprefixer]));
  },
  // Compile the css source file to dist
  async compile(source) {
    const rawContent = await helper.readFile(source);
    const basename = path.basename(source);
    const destination = `./dist/${basename}`;
    const result = await this.compiler().process(rawContent, {
      from: source,
      to: destination,
    });
    await helper.writeFile(destination, result.css);
  },

  // Compile all css files
  async run() {
    const cssFiles = await helper.getFiles('./*.css');

    await pMap(cssFiles, async filepath => {
      await this.compile(filepath);
    });
  },

  // Listen to changes in css files and rebuild them
  watch() {
    helper.watch('./src/*.css', filepath => {
      this.compile(filepath);
    });
  },
};
