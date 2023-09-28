module.exports = {
  layout: "page.njk",
  permalink: "/{{ page.fileSlug }}/",
  tags: "page",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title
    }
  }
};
