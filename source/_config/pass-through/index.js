module.exports = eleventyConfig => {

  eleventyConfig.addPassthroughCopy({
    // Pass through reveal JavaScript functionality files.
    './node_modules/reveal.js/dist/reveal.js*': '_assets/js/',
    './node_modules/reveal.js/plugin/': '_assets/js/plugin/',

    // Pass through fonts.
    './node_modules/@fontsource-variable/fraunces/README.md': '_assets/css/fonts/fraunces/README.md',
    './node_modules/@fontsource-variable/fraunces/index.css': '_assets/css/fonts/fraunces/index.css',
    './node_modules/@fontsource-variable/fraunces/files/': '_assets/css/fonts/fraunces/files/',
    './node_modules/@fontsource-variable/public-sans/README.md': '_assets/css/fonts/public-sans/README.md',
    './node_modules/@fontsource-variable/public-sans/index.css': '_assets/css/fonts/public-sans/index.css',
    './node_modules/@fontsource-variable/public-sans/files/': '_assets/css/fonts/public-sans/files/',
  });

}
