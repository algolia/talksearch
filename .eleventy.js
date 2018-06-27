module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  const isProduction = process.env.NODE_ENV === 'production';

  let config = {
    templateFormats: [
      "md"
    ],
    passthroughFileCopy: true,
  }

  if (isProduction) {
    config = {
      ...config,
    }
  }

  return config;
};
