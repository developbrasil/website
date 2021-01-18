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
      "O DEVELOP BRASIL é uma experiência com as maiores empresas e líderes do Brasil. Imersões no mundo do empreendedorismo, com o intuito de desenvolver e expandir novos horizontes profissionais.",
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
