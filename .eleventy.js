// Set up official 11ty plugins.
const {EleventyHtmlBasePlugin} = require('@11ty/eleventy');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Return our entire 11ty configuration.
  return {
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    templateFormats: ['njk', 'md', 'html'],

    // These are the folders that 11ty will use when compiling the built site.
    // The directories for `input` and `output` are relative to the root of the
    // project. The directories for `data`, `includes`, and `layouts` are
    // relative to the `input` directory, i.e. `source`.
    dir: {
      input: 'source',
      output: 'site',
      includes: '_includes',
      layouts: '_layouts'
    }
  };
}
