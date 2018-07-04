import fs from 'fs';
import _ from 'lodash';
import pify from 'pify';
import _glob from 'glob';
import path from 'path';
import frontMatter from 'front-matter';
import markdownIt from 'markdown-it';
import pug from 'pug';
import _mkdirp from 'mkdirp';
import chalk from 'chalk';
const glob = pify(_glob);
const mkdirp = pify(_mkdirp);
const readFile = pify(fs.readFile);
const writeFile = pify(fs.writeFile);
const markdown = markdownIt();

const build = {
  // Read a file and return its content as a string
  async readFile(filepath) {
    const content = await readFile(filepath);
    return content.toString('utf-8');
  },
  // Write a file to disk
  async writeFile(filepath, content) {
    const dirname = path.dirname(filepath);
    await mkdirp(dirname);
    await writeFile(filepath, content);

    const extname = path.extname(filepath);
    let displayName = filepath;
    const colors = {
      '.html': 'magenta',
      '.css': 'yellow',
      '.js': 'green',
    };
    if (colors[extname]) {
      displayName = chalk[colors[extname]](displayName);
    }

    console.info(`✔ Saving ${displayName}`);
  },
  // Get an array of all files matching a glob pattern
  async getFiles(pattern) {
    return await glob(`./src/${pattern}`);
  },
  // Return an object of all the generic site data
  async siteData() {
    return JSON.parse(await this.readFile('./src/_data.json'));
  },
  // Return the HTML version of the specified markdown file
  async markdownToHtml(filepath) {
    // Read file, and extract front-matter from raw text
    const rawContent = await this.readFile(filepath);
    const parsed = frontMatter(rawContent);
    const fileData = parsed.attributes;
    const markdownBody = parsed.body;

    // Convert markdown to html
    const htmlBody = markdown.render(markdownBody);

    // Init layout
    const layoutName = fileData.layout;
    const layoutFile = `./src/_layouts/${layoutName}.pug`;
    const layoutContent = await this.readFile(layoutFile);
    const pugCompile = pug.compile(layoutContent, { filename: layoutFile });

    // Compile layout
    const siteData = await this.siteData();
    const compileData = {
      ...siteData,
      ...fileData,
      content: htmlBody,
    };
    return pugCompile(compileData);
  },

  async run() {
    // Convert markdown to HTML
    const markdownFiles = await this.getFiles('*.md');
    _.each(markdownFiles, async filepath => {
      const htmlContent = await this.markdownToHtml(filepath);
      const basename = path.basename(filepath, '.md');
      const destination = `./dist/${basename}.html`;
      await this.writeFile(destination, htmlContent);
    });
  },
};

(async function() {
  await build.run();
})();
