import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    
  //This is the area where you paste your HTML codes
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="_images/logo.png"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="./landingpage.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="./aboutpage.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./resourcepage.html">Resources</a>
            </li>
          </ul>
          <button class="btn btn-outline-success" type="submit"><a href="loginpage.html" style="color:black; text-decoration: none;">Login</a></button>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Nav;