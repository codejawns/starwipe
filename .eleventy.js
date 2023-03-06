const metagen = require( "eleventy-plugin-metagen" );
const eleventyFaviconsPlugin = require("eleventy-plugin-gen-favicons");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function( eleventyConfig ) {

  eleventyConfig.addPassthroughCopy( {
    "./source/_images/": "dist/images/",
    "./node_modules/@fontsource/public-sans/files/public-sans-latin-5*.*": "dist/webfonts/",
    "./node_modules/@fontsource/public-sans/files/public-sans-latin-8*.*": "dist/webfonts/"
  } );

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPlugin(metagen);

  eleventyConfig.addPlugin(eleventyFaviconsPlugin, {
    "outputDir": "./docs"
  });

  eleventyConfig.setQuietMode(true);

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "source",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
      output: "docs"
    },
  };
};
