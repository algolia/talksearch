import helper from './helper';
import _ from 'lodash';
import path from 'path';
import frontMatter from 'front-matter';
import markdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItHighlight from 'markdown-it-highlightjs';
import cheerio from 'cheerio';
import pug from 'pug';
import pMap from 'p-map';
const markdown = markdownIt()
  .use(markdownItAnchor, {
    permalink: true,
    permalinkClass: 'anchor',
    permalinkSymbol: '',
  })
  .use(markdownItHighlight);

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
  // Build a markdown file to an html file
  async compile(filepath) {
    const siteData = await this.siteData();
    const sourceBasename = path.basename(filepath, '.md');
    const destination = `./dist/${sourceBasename}.html`;
    const currentUrl = `/${sourceBasename}.html`;

    // Read file, and extract front-matter from raw text
    const rawContent = await helper.readFile(filepath);
    const parsed = frontMatter(rawContent);
    const fileData = parsed.attributes;

    // Update {{config}} placeholders
    let markdownBody = parsed.body;
    _.each(siteData.config, (value, key) => {
      markdownBody = _.replace(
        markdownBody,
        new RegExp(`{{${key}}}`, 'g'),
        value
      );
    });

    // Convert markdown to html
    const htmlBody = markdown.render(markdownBody);

    // Add the hierarchy of headings to the matching link in the sidebar
    const headings = this.getHeadings(htmlBody);
    const sidebar = _.clone(siteData.sidebar);
    _.each(sidebar, category => {
      _.each(category.pages, page => {
        const linkBasename = path.basename(page.url, '.html');
        if (linkBasename === sourceBasename) {
          page.headings = headings; // eslint-disable-line no-param-reassign
        }
      });
    });

    // Init layout
    const layoutName = fileData.layout;
    const layoutFile = `./src/_layouts/${layoutName}.pug`;
    const layoutContent = await helper.readFile(layoutFile);
    const pugCompile = pug.compile(layoutContent, { filename: layoutFile });

    // Compile layout
    const compileData = {
      ...siteData,
      sidebar,
      current: {
        url: currentUrl,
        content: htmlBody,
        ...fileData,
      },
    };
    const htmlContent = pugCompile(compileData);

    // Save to disk
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
    // Rebuild everything on data change
    helper.watch('./src/_data.json', () => {
      this.run();
    });
  },
};
