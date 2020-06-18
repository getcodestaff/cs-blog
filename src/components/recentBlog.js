import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const recentBlog = ({ mainImage, title, author, excerpt, slug }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3 blog__all-item">
      <article className="article-box">
        <Link to={`/blog/${slug}`} className="article-box__img-wrapper">
          <Img
            fluid={mainImage.localFile.childImageSharp.fluid}
            alt="Article image"
            className="article-box__img"
          />
        </Link>
        <div className="article-box__copy">
          <h4 className="h4--lg article-box__title">
            <Link to={`/blog/${slug}`}>{title}</Link>
          </h4>
          <p
            className="article-box__text"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <p className="p--md">
            BY{" "}
            <a href="#" className="article-box__author">
              NEMANJA BANJANIN
            </a>
          </p>
        </div>
      </article>
    </div>
  )
}

export default recentBlog
