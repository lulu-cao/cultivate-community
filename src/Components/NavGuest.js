import React from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function NavGuest(props) {
// Not sure how you want to edit the below but feel free to change mine. See the bottom of this file. --Lulu
  const navigate = useNavigate();
//   const handleLogout = () => {
//     navigate('/logout');
//   }
  return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/homeGuest"><img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Cultivate Community"/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/homeGuest" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutGuest" className="nav-link" aria-current="page">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resourceGuest" className="nav-link" aria-current="page">
                Resources
              </Link>
            </li>
          </ul>
          {/* Not sure how you want to edit the below but feel free to change mine. --Lulu */}
            <Link to="/loginGuest">
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

// function mapStateToProps(reduxState) {
//   return {
//       username: reduxState.user.username,
//       password: reduxState.user.password,
//       isLoggedIn: reduxState.user.isLoggedIn
//   }
// }

// export default connect(mapStateToProps)(NavGuest);

export default NavGuest;