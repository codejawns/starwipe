module.exports = {
  layout: "layouts/presentation.njk",
  permalink: "/{{ page.fileSlug }}/",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title
    }
  }
};
