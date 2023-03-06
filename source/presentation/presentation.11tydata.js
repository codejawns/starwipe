module.exports = {
  layout: "presentation",
  permalink: "/{{ page.fileSlug }}/",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title
    }
  }
};
