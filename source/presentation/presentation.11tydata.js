module.exports = {
  layout: "presentation",
  permalink: "/presentation/{{- date | dateShort -}}-{{- page.fileSlug -}}/",
  tags: "presentation",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title
    }
  }
};
