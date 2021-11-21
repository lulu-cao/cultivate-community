import React from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function NavUser(props) {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/logout');
  }
  return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/homeUser"><img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Cultivate Community"/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/homeUser" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutUser" className="nav-link" aria-current="page">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resourceUser" className="nav-link" aria-current="page">
                Resources
              </Link>
            </li>
          </ul>
          {/* Not sure how you want to edit the below but feel free to change mine. --Lulu */}
            <button className="btn btn-outline-success" type="submit" onClick={() => {handleLogout()}} style={{color:"black", textDecoration: "none"}}>
                Log Out
            </button>
        </div>
      </div>
    </nav>
  </div>
  )
}

// Not sure how you want to edit the below but feel free to change mine. --Lulu
// function mapStateToProps(reduxState) {
//   return {
//       username: reduxState.user.username,
//       password: reduxState.user.password,
//       isLoggedIn: reduxState.user.isLoggedIn
//   }
// }

// export default connect(mapStateToProps)(NavUser);

export default NavUser;