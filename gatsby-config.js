module.exports = {
  siteMetadata: {
    title: `Cotorritos`,
    description: `Restaurante Bar Familiar`,
    author: `@Manuel_Villanueva`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp` /*
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-180163843-1",
        head: true,
        anonymize: true,
      },
    },*/,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
