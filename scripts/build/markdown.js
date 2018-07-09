import helper from './helper';
import _ from 'lodash';
import path from 'path';
import frontMatter from 'front-matter';
import markdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import cheerio from 'cheerio';
import pug from 'pug';
import pMap from 'p-map';
const markdown = markdownIt().use(markdownItAnchor);

export default {
  // Return an object of all the generic site data
  async siteData() {
    return JSON.parse(await helper.readFile('./src/_data.json'));
  },
  // Returns an array of all headings and their ids (to use in the sidebar)
  getHeadings(htmlBody) {
    const $ = cheerio.load(htmlBody);
    const headings = $('h2');
    return _.map(headings, heading => {
      const $el = $(heading);

      return {
        title: $el.text(),
        anchor: $el.attr('id'),
      };
    });
  },
  // Return the HTML version of the specified markdown file
  async markdownToHtml(filepath) {
    const siteData = await this.siteData();

    // Read file, and extract front-matter from raw text
    const rawContent = await helper.readFile(filepath);
    const parsed = frontMatter(rawContent);
    const fileData = parsed.attributes;
    const markdownBody = parsed.body;

    // Convert markdown to html
    const htmlBody = markdown.render(markdownBody);

    // Add the hierarchy of headings to the sidebar links
    const headings = this.getHeadings(htmlBody);
    const currentPageBasename = path.basename(filepath, '.md');
    const currentPageIndex = _.findKey(siteData.sidebar, link => {
      const linkBasename = path.basename(link.url, '.html');
      return linkBasename === currentPageBasename;
    });
    if (currentPageIndex) {
      _.set(siteData, `sidebar.${currentPageIndex}.headings`, headings);
    }

    // Init layout
    const layoutName = fileData.layout;
    const layoutFile = `./src/_layouts/${layoutName}.pug`;
    const layoutContent = await helper.readFile(layoutFile);
    const pugCompile = pug.compile(layoutContent, { filename: layoutFile });

    // Compile layout
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
    await pMap(markdownFiles, async filepath => {
      await this.compile(filepath);
    });
  },

  // Listen to changes in markdown and layouts and rebuild them
  watch() {
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
