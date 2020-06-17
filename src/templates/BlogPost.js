import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = props => {
  const post = props.data.wordpressPost

  return (
    <Layout>
      <SEO title="Web Development Blog for Freelancers: Tips & Tricks for Programmers" />
      <section className="banner banner--alt">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="u-color-secondary u-weight-smb">{post.title}</h1>
              <p
                className="p--hg u-ls-0 u-color-black-2 mt-3 mt-md-2 mb-5 mb-md-4"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div dangerouslySetInnerHTML={{ __html: post.content }}>
                {/* <p className="p--hg u-ls-0 u-color-black-2 mt-3 mt-md-2 mb-5 mb-md-4">
                  <Img
                    fluid={post.featured_media.localFile.childImageSharp.fluid}
                    style={{ maxWidth: 590, margin: "0 auto" }}
                    alt="Article banner image"
                  />
                </p>
                <h1 className="u-color-black-2">{post.title}</h1> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogPost

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      excerpt
      featured_media {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
