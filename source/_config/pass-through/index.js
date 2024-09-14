module.exports = eleventyConfig => {

  eleventyConfig.addPassthroughCopy({
    './node_modules/reveal.js/dist/reveal.js*': '_assets/js/',
    './node_modules/reveal.js/plugin/': '_assets/js/plugin/',
  });

}
