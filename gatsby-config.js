module.exports = {
  siteMetadata: {
    language: `en`, // or `ja`
    title: `gatsby-crudzoo demo site`,
    author: `your name`,
    keywords: [`demo`, `gatsby-theme`],
    heroText: `My Blog Site`,
    description: `site description`,
    social: {
      twitter: `your twitter name`,
    },
  },
  plugins: [
    {
      resolve: "gatsby-crudzoo",
      options: {},
    },
  ],
}