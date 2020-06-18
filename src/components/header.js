import React from "react"
import { Link } from "gatsby"

import logo from "../images/logo.png"

const Header = () => {
  const [mobileNav, setMobileNav] = React.useState(false)

  const headerMenu = React.useRef()

  React.useEffect(() => {
    if (mobileNav) {
      headerMenu.current.style.display = "block"
    } else {
      headerMenu.current.style.display = "none"
    }
  })

  return (
    <header className={`header ${mobileNav && "is-open"}`}>
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
                <ul
                  className="header__menu"
                  ref={headerMenu}
                  // style={{
                  //   height: 288,
                  //   paddingTop: 18.036,
                  //   marginTop: 0,
                  //   paddingBottom: 18.036,
                  //   marginBottom: 0,
                  // }}
                >
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
                    HIRE
                    <span className="d-none d-sm-inline"> TOP TALENT</span>
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
                <button
                  className="header__btn"
                  onClick={() => setMobileNav(!mobileNav)}
                >
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

export default Header
