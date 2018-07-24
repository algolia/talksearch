import helper from './helper';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import postcssNested from 'postcss-nested';
import postcssImport from 'postcss-import';
import path from 'path';
import fs from 'fs';
import pMap from 'p-map';

export default {
  // Return the postcss compiler
  compiler(configFile) {
    return postcss([
      postcssImport(),
      tailwind(configFile),
      postcssNested,
      autoprefixer,
    ]);
  },

  // Compile the css source file to dist
  async compile(source) {
    const rawContent = await helper.readFile(source);
    const relativePath = path.relative('./src', source);
    const destination = `./dist/${relativePath}`;

    // Use a local tailwind file if one is found
    const dirname = path.dirname(source);
    const potentialTailwindConfig = path.join(dirname, 'tailwind.config.js');
    const tailwindConfig = fs.existsSync(potentialTailwindConfig)
      ? potentialTailwindConfig
      : './tailwind.config.js';

    const result = await this.compiler(tailwindConfig).process(rawContent, {
      from: source,
      to: destination,
    });
    await helper.writeFile(destination, result.css);
  },

  // Compile all css files
  async run() {
    const cssFiles = await helper.getFiles('./**/style.css');

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
    helper.watch('./**/tailwind.config.js', () => {
      this.run();
    });
  },
};
