module.exports = {
  layout: "presentation.njk",
  permalink: "/presentation/{{- date | dateShort -}}-{{- page.fileSlug -}}/",
  tags: "presentation",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title
    }
  }
};
