import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
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
              <span className="d-lg-none">&nbsp;</span>featuring key technology
              updates, tutorials, freelancer resources, and management insights.
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
  </Layout>
)

export default IndexPage
