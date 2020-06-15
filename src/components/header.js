import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="header__content">
              <div className="header__group">
                <Link to="/" className="header__logo">
                  <img src={logo} alt="Logo" className="header__logo-img" />
                </Link>
              </div>
              <nav className="header__group header__nav">
                <ul className="header__menu">
                  <li>
                    <a href="#">WHY</a>
                  </li>
                  <li>
                    <a href="#">CLIENTS</a>
                  </li>
                  <li>
                    <a href="#">ENTERPRISE</a>
                  </li>
                  <li>
                    <a href="#">COMMUNITY</a>
                  </li>
                  <li>
                    <Link to="/">BLOG</Link>
                  </li>
                  <li>
                    <a href="#">ABOUT US</a>
                  </li>
                  <li>
                    <a href="#">CONTACT US</a>
                  </li>
                </ul>
                <div className="header__btns">
                  <a href="#" className="btn">
                    HIRE<span className="d-none d-sm-inline"> TOP TALENT</span>
                  </a>
                  <a href="#" className="btn btn--drk">
                    APPLY
                    <span className="d-none d-sm-inline"> AS A FREELANCER</span>
                  </a>
                </div>
              </nav>
              <div className="header__group">
                <a href="#" className="btn btn--white">
                  LOG IN
                </a>
                <button className="header__btn">
                  <span className="header__btn-line"></span>
                  <span className="header__btn-line"></span>
                  <span className="header__btn-line"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
