module.exports = {
  layout: "layouts/presentation.njk",
  permalink: "/presentation/{{ page.fileSlug }}/",
  tags: "presentation",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title
    }
  }
};
