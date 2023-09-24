// 11ty plugins.
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

// Third-party 11ty plugins.
const eleventyFaviconsPlugin = require("eleventy-plugin-gen-favicons");
const metagen = require( "eleventy-plugin-metagen" );

module.exports = function( eleventyConfig ) {

  // Send assets from the source to the built site directory. These include
  // files such as global images or webfonts. The 11ty `addPassthoughCopy`
  // will take anything from the first listed folder into the second listed
  // folder. e.g. anything that is stored in `./source/images/` will be copied
  // into `dist/images/`. The parent directory for the built site, e.g. `docs`,
  // isn't necessary; 11ty looks for that directory defined in the `return`
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

  // Let's use the 11ty navigation plugin! For this project, we don't need a
  // fully fleshed out navigation, as compared to a blog or a company website.
  // It will be easier to find the presentations and make a list on the homepage
  // that links to each one.
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

  // Setting quiet mode to `true` will remove a lot of output from the console
  // as you build the site. Instead of listing out all files generated from the
  // build, it will only display the file copy and write outputs. Set this to
  // `false` if you'd rather have all that information available when building. 
  eleventyConfig.setQuietMode(true);

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
