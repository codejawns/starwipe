module.exports = {
  layout: "layouts/presentation.njk",
  permalink: "/{{ page.fileSlug }}/",
  tags: "presentation",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title
    }
  }
};
