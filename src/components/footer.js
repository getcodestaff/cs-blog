import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

import logo from "../images/logo.png"

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer__header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer__header-content">
                <div className="footer__header-group">
                  <Link to="/" className="footer__logo">
                    <img src={logo} alt="Logo" className="footeR__logo-img" />
                  </Link>
                </div>
                <div className="footer__header-group">
                  <div className="footer__social">
                    <a
                      href="https://twitter.com/code_staff"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/code-staff"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a
                      href="https://www.facebook.com/codestaff"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </div>
                </div>
                <div className="footer__header-group">
                  <div className="footer__lang">
                    <select name="lang" id="lang">
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                    </select>
                    <i className="fas fa-caret-down"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__main">
        <div className="container">
          <div className="row">
            <div className="col-5 col-md-6 col-lg-3 mb-5 mb-md-4 mb-lg-0">
              <p className="p--xl u-color-black-2">
                <strong>HIGHEST IN-DEMAND TALENT</strong>
              </p>
              <ul className="footer__main-list">
                <li>
                  <a href="#">iOS Developers</a>
                </li>
                <li>
                  <a href="#">Front-End Developers</a>
                </li>
                <li>
                  <a href="#">UX Designers</a>
                </li>
                <li>
                  <a href="#">UI Designers</a>
                </li>
                <li>
                  <a href="#">Financial Modeling Consultants</a>
                </li>
                <li>
                  <a href="#">Interim CFOs</a>
                </li>
                <li>
                  <a href="#">Digital Project Managers</a>
                </li>
              </ul>
            </div>
            <div className="col-4 col-md-6 col-lg-3 mb-5 mb-md-4 mb-lg-0">
              <p className="p--xl u-color-black-2">
                <strong>ABOUT</strong>
              </p>
              <ul className="footer__main-list">
                <li>
                  <a href="#">Clients</a>
                </li>
                <li>
                  <a href="#">Freelance Developers</a>
                </li>
                <li>
                  <a href="#">Freelance Designers</a>
                </li>
                <li>
                  <a href="#">Freelance Finance Experts</a>
                </li>
                <li>
                  <a href="#">Freelance Project Managers</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
              </ul>
            </div>
            <div className="col-3 col-md-6 col-lg-2">
              <p className="p--xl u-color-black-2">
                <strong>CONTACT</strong>
              </p>
              <ul className="footer__main-list">
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Press Center</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <p className="p--xl u-color-black-2">
                <strong>SIGN UP FOR A NEWSLETTER</strong>
              </p>
              <p className="u-color-gray-13">
                Weekly breaking news, analysis and cutting edge advices on job
                searching.
              </p>
              <form action="#" className="footer__subscribe">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                />
                <button className="btn" type="submit">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__sub">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-start">
                <p>
                  © Copyright 2010 - 2018 <strong>Codestaff</strong>, LLC
                </p>
                <p>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Website Terms</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
