/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Develop Brasil",
    titleTemplate: "%s | Inquietos que procuram algo a mais",
    description:
      "O DEVELOP BRASIL é uma experiência com grandes líderes e empresas do Brasil. Venha participar dessa imersão no mundo do empreendedorismo. Vamos desenvolver!",
    author: "Leo AD",
    image: "/develop-brasil.jpg",
    siteUrl: "https://www.experienciadevelopbrasil.com.br",
    twitterUsername: "@theleoad",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
