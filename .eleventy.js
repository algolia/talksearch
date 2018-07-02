module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");

  const isProduction = process.env.NODE_ENV === 'production';

  let config = {
    dir: {
      input: './src',
      output: './dist'
    },
    templateFormats: [ "md" ],
    passthroughFileCopy: true,
  }

  if (isProduction) {
    config = {
      ...config,
    }
  }

  return config;
};
