import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    
  //This is the area where you paste your HTML codes
          <nav className="navbar navbar-lg navbar-expand-lg navbar-dark bg-teal">
          <div className="container">
            <a className="navbar-brand" href="#"><img src={process.env.PUBLIC_URL + "/images/logo-white.png"}/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">  
                <li className="nav-item">
                  <Link to="home" className="nav-link">
                    Home
                  </Link>
                  {/* <a className="nav-link" href="#">Home</a> */}
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                  {/* <a className="nav-link" href="#">About</a> */}
                </li>
                <li className="nav-item">
                  <Link to="/resources" className="nav-link">
                    Resources
                  </Link>
                  {/* <a className="nav-link" href="#">Resources</a> */}
                </li>
              </ul>
              <div className="dropdown">
                <button className="btn btn-outline-white dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  My account
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Profile</a>
                  <a className="dropdown-item" href="#">Settings & Privacy</a>
                  <a className="dropdown-item" href="#">Help</a>
                  <Link to="/logout" className="dropdown-item">
                    Sign Out
                  </Link>
                  {/* <a className="dropdown-item" href="#">Sign out</a> */}
                </div>
              </div>
            </div>
          </div>
          </nav>
  )
}

export default Nav;