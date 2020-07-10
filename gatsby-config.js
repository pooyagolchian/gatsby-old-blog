module.exports = {
  pathPrefix: "/pooyagolchian.github.io",
  siteMetadata: {
    title: `Pooya Golchian`,
    author: `Pooya Golchian`,
    description: `Pooya Golchian, Software Engineer, Drupal,front-end, react, Javascript and UI Developer, UI/UX Designer`,
    siteUrl: `http://pooyagolchian.ir`,
    social: {
      twitter: `pooyagolchian`,
      github: `pooyagolchian`,
      linkedin: `pooyagolchian`,
      dribbble: `pooyagolchian`,
      farsi: `http://pooyagolchian.ir/farsi`,
    },
  },
  plugins: [
    `gatsby-theme-overreacted-toggle`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-114457345-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pooya Golchian English Blog`,
        short_name: `Pooya Golchian`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#d87171`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
