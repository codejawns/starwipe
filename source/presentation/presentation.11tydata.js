module.exports = {
  layout: "presentation.njk",
  permalink: "/presentation/{{- date | dateShort -}}-{{- page.fileSlug -}}/",
  tags: "presentations",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title
    }
  }
};
