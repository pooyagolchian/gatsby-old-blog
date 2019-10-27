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
           
         <div>
{/* 
           <div>
           <Image
          fixed={data.coffee.childImageSharp.fixed}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 200,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `100%`,
          }}
        />
           </div> */}
           
        

          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            
          <Image
            fixed={data.coffee.childImageSharp.fixed}
            alt={author}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 100,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `100%`,
            }}
          />
            <p>
            Written by <strong>{author}</strong>. I'm  Software Engineer and Front-end developer with a passion to create simple, elegant, easy to use things to make this world a bit easier. <br></br>
              {` `}
              <a target='blank' href={`https://twitter.com/${social.twitter}`}>
                 Twitter 
              </a>
              {` | `}  
              <a target='blank' href={`https://github.com/${social.github}`}>
                 Github
              </a>
              {` | `}    
              <a target='blank' href={`https://linkedin.com/in/${social.linkedin}`}>
                 Linkein
              </a>
              {` | `}   
              <a target='blank' href={`https://dribbble.com/${social.dribbble}`}>
              Dribbble
              </a>
              {` | `}    
              <a target='blank' href={`${social.farsi}`}>
              Farsi Blog
              </a>
            </p>
          </div>
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
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
      coffee: file(absolutePath: { regex: "/coffee.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
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
