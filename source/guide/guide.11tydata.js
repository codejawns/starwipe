module.exports = {
  layout: "guide.njk",
  permalink: "/guide/{{ page.fileSlug }}/",
  tags: "guide",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title
    }
  }
};
