module.exports = {
  siteMetadata: {
    title: `MasterCourse`,
    description: `An interactive Web User Interface for a course/tutorial app. Developed using Gatsby, React, Styled-Components, JS & more. `,
    author: `Rajat Kaushik`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
