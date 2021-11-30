import React from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Nav(props) {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/logout');
  }
  return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home"><img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Cultivate Community"/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" aria-current="page">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resources" className="nav-link" aria-current="page">
                Resources
              </Link>
            </li>
          </ul>
          {!props.isLoggedIn ?
            (
              <Link to="/login">
                <button className="btn btn-outline-success" type="submit" style={{color:"black", textDecoration: "none"}}>
                  Log In
                </button>
              </Link>
            ):
            (
              <button className="btn btn-outline-success" type="submit" onClick={() => {handleLogout()}} style={{color:"black", textDecoration: "none"}}>
                Log Out
              </button>
            )
          }
        </div>
      </div>
    </nav>
  </div>
  )
}

function mapStateToProps(reduxState) {
  return {
      username: reduxState.user.username,
      password: reduxState.user.password,
      isLoggedIn: reduxState.user.isLoggedIn
  }
}

export default connect(mapStateToProps)(Nav);