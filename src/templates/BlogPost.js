import React from "react"
import { graphql } from "gatsby"

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
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
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
