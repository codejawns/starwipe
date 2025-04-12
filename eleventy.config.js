import favicons from 'eleventy-plugin-gen-favicons';
import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import metagen from 'eleventy-plugin-metagen';

import filterDate from './source/_config/filters/date-simple.js';

export default async function(eleventyConfig) {
  // There are some files that we want git to ignore, and not commit to the
  // repository. But 11ty _also_ ignores everything in the `.gitignore`, and we
  // want it to process some of those files! So here we tell 11ty to disable 
  // using the `.gitignore`, and only use `.eleventyignore`.
  eleventyConfig.setUseGitIgnore(false);

  // Add the metagen plugin for 11ty.
  // https://github.com/tannerdolby/eleventy-plugin-metagen
  eleventyConfig.addPlugin(metagen);

  // Add the MarkdownIt plugin for 11ty.
  eleventyConfig.setLibrary('md',
    markdownIt({
      html: true,
      breaks: true,
      linkify: true
    }).use(markdownItAttrs)
  );

  // Add the favicon plugin for 11ty.
  // https://github.com/NJAldwin/eleventy-plugin-gen-favicons
  eleventyConfig.addPlugin(favicons, {
    'outputDir': './site'
  });

  eleventyConfig.addPlugin(filterDate);
};

export const config = {
  templateFormats: ['njk', 'md', 'html'],
  htmlTemplateEngine: 'njk',
  markdownTemplateEngine: 'njk',

  dir: {
    input: 'source',
    data: '_data',
    includes: '_includes',
    layouts: '_layouts',
    output: 'site'
  }
}
