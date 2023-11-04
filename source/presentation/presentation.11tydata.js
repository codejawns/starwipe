module.exports = {
  layout: "presentation",
  permalink: "/presentation/{{ page.fileSlug }}/",
  tags: "presentation",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title
    }
  }
};
