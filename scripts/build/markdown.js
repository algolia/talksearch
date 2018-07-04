import helper from './helper';
import _ from 'lodash';
import path from 'path';
import frontMatter from 'front-matter';
import markdownIt from 'markdown-it';
import pug from 'pug';
const markdown = markdownIt();

export default {
  // Return an object of all the generic site data
  async siteData() {
    return JSON.parse(await helper.readFile('./src/_data.json'));
  },
  // Return the HTML version of the specified markdown file
  async markdownToHtml(filepath) {
    // Read file, and extract front-matter from raw text
    const rawContent = await helper.readFile(filepath);
    const parsed = frontMatter(rawContent);
    const fileData = parsed.attributes;
    const markdownBody = parsed.body;

    // Convert markdown to html
    const htmlBody = markdown.render(markdownBody);

    // Init layout
    const layoutName = fileData.layout;
    const layoutFile = `./src/_layouts/${layoutName}.pug`;
    const layoutContent = await helper.readFile(layoutFile);
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

  // Build a markdown file to an html file
  async compile(filepath) {
    const htmlContent = await this.markdownToHtml(filepath);
    const basename = path.basename(filepath, '.md');
    const destination = `./dist/${basename}.html`;
    await helper.writeFile(destination, htmlContent);
  },

  async run() {
    // Convert markdown to HTML
    const markdownFiles = await helper.getFiles('*.md');
    _.each(markdownFiles, async filepath => {
      await this.compile(filepath);
    });
  },

  async watch() {
    await this.run();
    // Update HTML on each markdown change
    helper.watch('./src/*.md', filepath => {
      this.compile(filepath);
    });
    // Rebuild all markdown on layout change
    helper.watch('./src/_layouts/*.pug', () => {
      this.run();
    });
  },
};
