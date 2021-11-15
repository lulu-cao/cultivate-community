import React from 'react';
 
function Footer(props) {
  return (
    //This is the area where you paste your HTML codes
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="./loginpage.html" className="nav-link px-2 text-muted">Home</a></li>
          <li className="nav-item"><a href="./aboutpage.html" className="nav-link px-2 text-muted">About</a></li>
          <li className="nav-item"><a href="./resourcepage.html" className="nav-link px-2 text-muted">Resources</a></li>
          <li className="nav-item"><a href="./loginpage.html" className="nav-link px-2 text-muted">Login</a></li>
        </ul>
        <p className="text-center text-muted">© 2021 Cultivate Community</p>
      </footer>
    </div>
  )
}

export default Footer;