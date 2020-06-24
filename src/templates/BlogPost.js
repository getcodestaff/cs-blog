import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = props => {
  const post = props.data.wordpressPost
  const recentPosts = props.data.recentPosts.edges

  return (
    <Layout>
      <SEO title="Web Development Blog for Freelancers: Tips & Tricks for Programmers" />
      <main>
        <section className="banner banner--img">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p className="u-color-black-4 u-weight-bld">
                  {post.categories[0].name}
                </p>
                <h1 className="h1--sm u-color-secondary-alt-3 u-weight-smb u-font-main mt-2 mb-4">
                  {post.title}
                </h1>
                <p className="p--xl">
                  By{" "}
                  <span className="u-color-secondary-alt-3 u-weight-smb">
                    <a href="#">{post.author.name}</a>
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;{post.date}
                </p>
                <Img
                  fluid={post.featured_media.localFile.childImageSharp.fluid}
                  alt="Article banner image"
                  className="banner__img"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="article">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="article__inner">
                  <div
                    className="article__main"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  <aside className="article__sidebar sidebar">
                    <div className="sidebar__group">
                      <h2 className="u-weight-bld mb-4">Most Recent Post</h2>
                      <div className="article__recent">
                        {recentPosts.map(post => (
                          <Link
                            to={`/blog/${post.node.slug}`}
                            className="article__recent-item article-box article-box--sm"
                            key={post.node.id}
                          >
                            <Img
                              fluid={
                                post.node.featured_media.localFile
                                  .childImageSharp.fluid
                              }
                              alt="Article image"
                              className="article-box__img"
                            />

                            <div className="article-box__copy">
                              <p className="p--md u-color-gray-29">
                                {post.node.categories[0].name}
                              </p>
                              <h4>{post.node.title}</h4>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="sidebar__group">
                      <div className="article__author">
                        <div
                          className="article__author-img"
                          style={{
                            backgroundImage: `url(${post.author.avatar_urls.wordpress_24})`,
                          }}
                        >
                          &nbsp;
                        </div>
                        <h3 className="u-font-main u-color-black article__author-title">
                          <a href="#">{post.author.name}</a>
                        </h3>
                        <p className="p--xl">{post.author.description}</p>
                        {/* <div className="article__author-social">
                          <a href="#">
                            <i className="fas fa-home"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-google-plus-g"></i>
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
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
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
      }
      author {
        name
        description
        avatar_urls {
          wordpress_24
        }
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
    recentPosts: allWordpressPost(limit: 3) {
      edges {
        node {
          id
          slug
          title
          categories {
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
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
