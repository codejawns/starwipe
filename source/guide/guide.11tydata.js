module.exports = {
  layout: "layouts/default.njk",
  permalink: "/guide/{{ page.fileSlug }}/",
  tags: "guide",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title
    }
  }
};
