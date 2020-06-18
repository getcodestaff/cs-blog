import React from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blog from "../components/blog"
import RecentBlog from "../components/recentBlog"

const IndexPage = props => {
  const data = props.data.allWordpressPost.edges
  const data2 = props.data.recentposts.edges

  console.log(data2)

  return (
    <Layout>
      <SEO title="Web Development Blog for Freelancers: Tips & Tricks for Programmers" />
      <section className="banner banner--alt">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="u-color-secondary u-weight-smb">
                The Codestaff Blog
              </h1>
              <p className="p--hg u-ls-0 u-color-black-2 mt-3 mt-md-2 mb-5 mb-md-4">
                The codestaff Blog is the top hub for business, design, and
                technology talent, executives, and entrepreneurs,
                <br className="d-none d-lg-block" />
                <span className="d-lg-none">&nbsp;</span>featuring key
                technology updates, tutorials, freelancer resources, and
                management insights.
              </p>
              <ul className="social">
                <li>
                  <a
                    href="https://twitter.com/code_staff"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/code-staff"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/codestaff"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="blog__main">
                <div className="blog__main-intro">
                  <a href="#" className="tag">
                    codestaff Blog
                  </a>
                  <h2 className="h2--xl u-weight-bld mt-4 mt-md-3 mb-2">
                    Web Development
                  </h2>
                  <p className="p--hg u-ls-0 u-color-gray-3">
                    Work with hand-picked talent, evaluated with our thorough
                    screening process
                  </p>
                </div>
                <div className="blog__main-content">
                  <div className="row">
                    {data.map(blog => (
                      <Blog
                        key={blog.node.id}
                        mainImage={blog.node.featured_media}
                        title={blog.node.title}
                        author={blog.node.author.name}
                        excerpt={blog.node.excerpt}
                        slug={blog.node.slug}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="blog__all">
                <div className="blog__all-intro">
                  <h2 className="u-uppercase">
                    Read the most recent
                    <br />
                    Web Development articles
                  </h2>
                  <p className="p--hg u-color-gray-3 u-ls-0">
                    This space is all about you, from Ruby to PHP!
                  </p>
                </div>
                <div className="row blog__all-main">
                  {data2.map(blog => (
                    <RecentBlog
                      key={blog.node.id}
                      mainImage={blog.node.featured_media}
                      title={blog.node.title}
                      author={blog.node.author.name}
                      excerpt={blog.node.excerpt}
                      slug={blog.node.slug}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allWordpressPost(
      filter: {
        categories: { elemMatch: { name: { nin: "Web Development" } } }
      }
    ) {
      edges {
        node {
          id
          slug
          title
          content
          excerpt
          author {
            name
          }
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
      }
    }
    recentposts: allWordpressPost(
      filter: { categories: { elemMatch: { name: { eq: "Web Development" } } } }
    ) {
      edges {
        node {
          id
          slug
          title
          content
          excerpt
          author {
            name
          }
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
      }
    }
  }
`
