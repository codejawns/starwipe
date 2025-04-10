import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';

import filterDate from './source/_config/filters/date-simple.js';

export default async function(eleventyConfig) {

  eleventyConfig.setLibrary('md',
    markdownIt({
      html: true,
      breaks: true,
      linkify: true
    }).use(markdownItAttrs)
  );

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
