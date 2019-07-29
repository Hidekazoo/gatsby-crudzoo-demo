module.exports = {
  siteMetadata: {
    language: `en`,
    title: `gatsby-crudzoo demo site`,
    author: `hidekazoo`,
    keywords: [`demo`, `gatsby-theme`],
    description: `This site is demo of gatsby-crudzoo theme`,
    siteUrl: `http://example.com`,
    mainColor: `#e65100`,
    social: {
      twitter: `crudzoo`
    }
  },
  plugins: [
    {
      resolve: "gatsby-crudzoo",
      options: {}
    }
  ]
};
