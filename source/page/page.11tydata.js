module.exports = {
  layout: "layouts/default.njk",
  permalink: "/{{ page.fileSlug }}/",
  tags: "page",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title
    }
  }
};
