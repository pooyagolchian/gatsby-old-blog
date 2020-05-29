import React from "react"
import { StaticQuery, graphql } from "gatsby"

function Footer() {
  return (
    <StaticQuery
      query={socialQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        return (
          <div>
            <ul className="footer-social">
              <li>
                <a target="blank" href={`https://github.com/${social.github}`}>
                  Github
                </a>
              </li>

              <li>
                <a
                  target="blank"
                  href={`https://linkedin.com/in/${social.linkedin}`}
                >
                  Linkein
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href={`https://dribbble.com/${social.dribbble}`}
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a target="blank" href={`${social.farsi}`}>
                  Farsi Blog
                </a>
              </li>
            </ul>
          </div>
        )
      }}
    />
  )
}

const socialQuery = graphql`
  query socialQuery {
    site {
      siteMetadata {
        social {
          github
          linkedin
          dribbble
          farsi
        }
      }
    }
  }
`

export default Footer
