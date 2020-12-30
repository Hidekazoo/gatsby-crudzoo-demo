module.exports = {
  siteMetadata: {
    language: `en`, // or `ja`
    title: `gatsby-crudzoo demo site`,
    author: `your name`,
    job: `Engineer`,
    keywords: [`demo`, `gatsby-theme`],
    heroText: `My Blog Site`,
    description: `site description`,
    siteUrl: `http://example.com`,
    social: {
      twitter: `your twitter name`,
    },
    algoliaSearch: false,
  },
  plugins: [
    {
      resolve: "gatsby-crudzoo",
      options: {},
    },
  ],
}