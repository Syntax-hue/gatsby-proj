const path = require('path');
require('dotenv').config({
  path: path.join(__dirname, (process.env.NODE_ENV === 'production') ? 
    '.env.production'
    :
    '.env.development'
  )
})

console.log('strapi', process.env.GATSBY_SITE_STRAPI)
console.log('no https', process.env.GATSBY_SITE_STRAPI_LOAD_DATA_NO_HTTPS);
module.exports = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_SITE_URL
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_SITE_STRAPI_LOAD_DATA_NO_HTTPS,
        queryLimit: 1000, // Default to 100
        //contentTypes: [`Jobs`],
        singleTypes: [`jobs`],
        //If using single types place them in this array.
        /*singleTypes: [`home-page`, `contact`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: "",
          password: "",
        },*/
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LegisR`,
        short_name: `LegisR`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve:`gatsby-plugin-sitemap`,
      options: {
        exclude: [`/thankYou`]
      }
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: process.env.GATSBY_SITE_URL,
        sitemap: `${process.env.GATSBY_SITE_URL}/sitemap.xml`,
        policy: [{
          userAgent: '*',
          allow: '/',
          disallow: `/thankYou`,
        }]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
