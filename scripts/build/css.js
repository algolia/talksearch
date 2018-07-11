import helper from './helper';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import postcssNested from 'postcss-nested';
import postcssImport from 'postcss-import';
import path from 'path';
import pMap from 'p-map';

export default {
  COMPILER: null,
  // Return the postcss compiler
  compiler() {
    if (this.COMPILER) {
      return this.COMPILER;
    }
    return (this.COMPILER = postcss([
      postcssImport(),
      tailwind('./tailwind.config.js'),
      postcssNested,
      autoprefixer,
    ]));
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
    // Rebuild files when changed
    helper.watch('./src/**/*.css', () => {
      this.run();
    });
    // Rebuild all files when tailwind config is changed
    helper.watch('./tailwind.config.js', () => {
      this.COMPILER = null;
      this.run();
    });
  },
};
