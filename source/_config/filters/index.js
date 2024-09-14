module.exports = eleventyConfig => {

  // Add date filters to make it a little easier to write dates.
  eleventyConfig.addFilter( 'dateLong', require('./date-long.js') );
  eleventyConfig.addFilter( 'dateShort', require('./date-short.js') );

}
