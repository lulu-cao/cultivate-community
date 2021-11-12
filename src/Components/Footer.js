import React from 'react';
 
function Footer(props) {
  return (
    //This is the area where you paste your HTML codes
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item"><a href="./loginpage.html" class="nav-link px-2 text-muted">Home</a></li>
          <li class="nav-item"><a href="./aboutpage.html" class="nav-link px-2 text-muted">About</a></li>
          <li class="nav-item"><a href="./resourcepage.html" class="nav-link px-2 text-muted">Resources</a></li>
          <li class="nav-item"><a href="./loginpage.html" class="nav-link px-2 text-muted">Login</a></li>
        </ul>
        <p class="text-center text-muted">© 2021 Cultivate Community</p>
      </footer>
    </div>
  )
}

export default Footer;