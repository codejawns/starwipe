module.exports = {
  layout: "page",
  permalink: "/{{ page.fileSlug }}/",
  tags: "page",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title
    }
  }
};
