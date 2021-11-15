import React from 'react';
import { Link } from 'react-router-dom';

function LoginNav(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="login"><img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Cultivate Community"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/login" className="nav-link" aria-current="page">
                  Home
                </Link>
                {/* <a className="nav-link" aria-current="page" href="./loginpage.html">Home</a> */}
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" aria-current="page">
                  About
                </Link>
                {/* <a className="nav-link" aria-current="page" href="./aboutpage.html">About</a> */}
              </li>
              <li className="nav-item">
                <Link to="/resources" className="nav-link">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default LoginNav;