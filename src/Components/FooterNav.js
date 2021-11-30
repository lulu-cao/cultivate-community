import React from 'react';
import { Link } from 'react-router-dom';
 
function FooterNav(props) {
  return (
    <div>
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <Link className="nav-link px-2 text-muted" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-2 text-muted" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-2 text-muted" to="/resources">
            Resources
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-2 text-muted" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default FooterNav;