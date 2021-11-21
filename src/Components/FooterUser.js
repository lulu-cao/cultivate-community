import React from 'react';
 
function FooterUser(props) {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="./home-user.html" className="nav-link px-2 text-muted">Home</a></li>
            <li className="nav-item"><a href="./about-user.html" className="nav-link px-2 text-muted">About</a></li>
            <li className="nav-item"><a href="./resource-user.html" className="nav-link px-2 text-muted">Resources</a></li>
        </ul>
        <p className="text-center text-muted">© 2021 Cultivate Community</p>
      </footer>
    </div>
  )
}

export default FooterUser;