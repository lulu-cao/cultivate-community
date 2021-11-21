import React from 'react';
import { Link } from 'react-router-dom';
 
function FooterGuest(props) {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a className="nav-link px-2 text-muted"><Link to="/homeGuest">Home</Link></a></li>
          <li className="nav-item"><a className="nav-link px-2 text-muted"><Link to="/aboutGuest">About</Link></a></li>
          <li className="nav-item"><a className="nav-link px-2 text-muted"><Link to="/resourceGuest">Resources</Link></a></li>
          <li className="nav-item"><a className="nav-link px-2 text-muted"><Link to="/loginGuest">Login</Link></a></li>
        </ul>
        <p className="text-center text-muted">© 2021 Cultivate Community</p>
      </footer>
    </div>
  )
}

export default FooterGuest;