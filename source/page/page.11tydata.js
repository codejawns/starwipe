module.exports = {
  layout: "default.njk",
  permalink: "/{{ page.fileSlug }}/",
  tags: "page",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title
    }
  }
};
