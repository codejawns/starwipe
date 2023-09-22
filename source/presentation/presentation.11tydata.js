module.exports = {
  layout: "presentation.njk",
  permalink: "/presentation/{{ page.fileSlug }}/",
  tags: "presentation",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title
    }
  }
};
