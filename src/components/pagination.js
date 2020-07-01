import React from "react"
import Link from "gatsby-link"

import paginationDot from "../images/pagination-dots.png"
import paginationArrow from "../images/pagination-arrow.png"

const pagination = ({ pathProps }) => {
  const isFirst = pathProps.humanPageNumber === 1
  const isLast = pathProps.humanPageNumber === pathProps.numberOfPages

  return (
    <div className="blog__all-pagination">
      <div className="pagination">
        {Array.from({ length: pathProps.numberOfPages }, (_, i) => (
          <Link
            key={`page-number${i + 1}`}
            to={`/${i === 0 ? "/blogs" : "blogs/" + (i + 1)}`}
            className="pagination__item"
            activeClassName="is-active"
            // className={`pagination__item ${
            //   pathProps.humanPageNumber === i + 1 ? "is-active" : ""
            // }`}
          >
            {i + 1}
          </Link>
        ))}
        {/* <div className="pagination__item is-disabled">
          <img src={paginationDot} alt="Intermediate pages" />
        </div>
        <a href="#" className="pagination__item">
          10
        </a>
        <a href="#" className="pagination__item">
          <img src={paginationArrow} alt="Next" className="pagination__arrow" />
        </a> */}
      </div>
    </div>
  )
}

export default pagination
