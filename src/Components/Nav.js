import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    
  //This is the area where you paste your HTML codes
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="login"><img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Cultivate Community"/></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/login" class="nav-link" aria-current="page">
                Home
              </Link>
              {/* <a class="nav-link" aria-current="page" href="./loginpage.html">Home</a> */}
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link" aria-current="page">
                About
              </Link>
              {/* <a class="nav-link" aria-current="page" href="./aboutpage.html">About</a> */}
            </li>
            <li class="nav-item">
              <Link to="/resources" class="nav-link">
                Resources
              </Link>
              {/* <a class="nav-link" href="./resourcepage.html">Resources</a> */}
            </li>
          </ul>
          <button class="btn btn-outline-success" type="submit"><a href="loginpage.html" style={{color:"black", textDecoration: "none"}}>Logout</a></button>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Nav;