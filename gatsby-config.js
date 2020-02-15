const manifestConfig = require('./manifest-config');
require('dotenv').config();

const getAboutEntry = entry => entry.sys.contentType.sys.id === 'about';

module.exports = {
  siteMetadata: {
    title: `Gatsby`,
    siteUrl: `https://confident-mayer-97f337.netlify.com/`,
    description: `Blazing fast modern site generator for React`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Cabin', 'Open Sans'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: manifestConfig,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
      },
    },
    'gatsby-plugin-offline',
  ],
};
