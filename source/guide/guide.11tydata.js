module.exports = {
  layout: "guide",
  permalink: "/guide/{{ page.fileSlug }}/",
  tags: "guide",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title
    }
  }
};
