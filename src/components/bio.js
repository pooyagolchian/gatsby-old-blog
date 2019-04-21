/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
            Written by <strong>{author}</strong>, Software Engineer with a passion to create simple, elegant, easy to use things to make this world a bit easier. <br></br>
              {` `}
              <a target='blank' href={`https://twitter.com/${social.twitter}`}>
                 Twitter 
              </a>
              {`  `},  
              <a target='blank' href={`https://github.com/${social.github}`}>
                 Github
              </a>
              {`  `},    
              <a target='blank' href={`https://linkedin.com/in/${social.linkedin}`}>
                 Linkein
              </a>
              {`  `},    
              <a target='blank' href={`https://dribbble.com/${social.dribbble}`}>
              Dribbble
              </a>
              {`  `},    
              <a target='blank' href={`${social.farsi}`}>
              Farsi Blog
              </a>
            </p>
          </div>
        )
      }}
    />
  )
}



const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          github
          linkedin
          dribbble
          farsi
        }
      }
    }
  }
`

export default Bio
