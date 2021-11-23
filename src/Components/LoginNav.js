import React from 'react';
import { Link } from 'react-router-dom';
 
function LoginNav(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="home"><img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Cultivate Community"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link" aria-current="page">
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
                <Link to="/resource" className="nav-link" aria-current="page">
                  Resources
                </Link>
              </li>
            </ul>
            <Link to="/login">
                <button className="btn btn-outline-success" type="submit" style={{color:"black", textDecoration: "none"}}>
                    Log In
                </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default LoginNav;