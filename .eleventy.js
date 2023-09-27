// 11ty plugins.
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

// Third-party 11ty plugins.
const eleventyFaviconsPlugin = require("eleventy-plugin-gen-favicons");
const metagen = require( "eleventy-plugin-metagen" );

module.exports = function( eleventyConfig ) {
  // Send assets from the source (`./source`) to the built site (`./docs`)
  // directory. These include files such as global images or webfonts.
  //
  // 1. The first parameter is the directory that holds the items you want
  //    copied over, or "passed through". This path is relative to your
  //    _project root_, e.g. `./source/images/`.
  // 2. The second parameter is the directory you want the items to be copied
  //    over _into_. This path is relative to your _built site output_. e.g.
  //    `dist/images/`.
  //
  // The parent directory for the built site isn't necessary; 11ty looks for
  // that directory based on what is defined as the output in the `return`
  // options.
  eleventyConfig.addPassthroughCopy( {
    // Move global images to the build directory. These are images used
    // throughout the site, like logos, profile photos, or icons. They are not
    // images specific to presentations, such as screenshots or figures.
    "./source/_images/": "dist/images/",

    // Move webfonts to the build directory.
    "./node_modules/@fontsource/public-sans/files/public-sans-latin-5*.*": "dist/webfonts/",
    "./node_modules/@fontsource/public-sans/files/public-sans-latin-8*.*": "dist/webfonts/",

    // Move reveal.js files to the build directory.
    "./node_modules/reveal.js/dist/reveal.js*": "dist/js/",
    "./node_modules/reveal.js/plugin/": "dist/js/plugin/"
  } );

  // Let's use the 11ty navigation plugin! This plugin allows us to create a
  // navigation menu for all or some pages on the site. For example, the main
  // navigation includes items such as About or Contact, while the presentation
  // navigation includes links to Presentation One, Presentation Two, etc. This
  // helps make it easier to find the categories we want (e.g. presentations)
  // and make a list on the homepage or in a menu that links to each one.
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // The metagen plugin adds options to output a whole lot of data to the `head`
  // of the page. This includes info such as the site name, the site title, the
  // page title, the canonical URL, the site generator, and any CSS or JS files.
  eleventyConfig.addPlugin(metagen);

  // Add a favicon to your head, and let the plugin automatically generate all
  // types of favicon files for the front-end. The output directory here is
  // where those favicon files will live. Best to keep them in the root folder.
  eleventyConfig.addPlugin(eleventyFaviconsPlugin, {
    "outputDir": "./docs"
  });

  // The 11ty HTML Base plugin adjusts URLs across the site, instead of coding
  // the HTML `<base>` element, or using the `url` filter on every single URL.
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Setting quiet mode to `false` will include a lot of output from the console
  // as you build the site. This lists out all files generated from the build.
  // Set this to `true` if you would rather it only display the file copy and
  // write outputs when building. 
  eleventyConfig.setQuietMode(false);

  // Add the image shortcode, from the 11ty image plugin.
  eleventyConfig.addAsyncShortcode( "image", require("./source/_config/shortcodes/image.js") );


  return {
    // The templates here are written using Nunjucks. Any HTML or Markdown will
    // run through the Nunjucks engine when building the site. If you would like
    // to build your own templates in a different language, be sure to change
    // that here. See https://www.11ty.dev/docs/languages/ for more information.
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    
    // This defines the directory for each aspect of an 11ty project.
    dir: {
      input: "source", // root-level, where 11ty looks for the source files
      data: "_data", // under the source, any site global data
      includes: "_includes", // under the source, include and partials
      layouts: "_layouts", // user the source, page layouts
      output: "docs" // root-level, where 11ty puts the final built site
    },
  };
};
