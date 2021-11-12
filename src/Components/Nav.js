import React, { Component } from 'react'; 

class Nav extends Component {

    render() {

        return (

//This is the area where you paste your HTML codes
<nav class="navbar navbar-lg navbar-expand-lg navbar-dark bg-teal">
<div class="container">
  <a class="navbar-brand" href="#"><img src="_images/logo-white.png"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarCollapse">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>  
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Resources</a>
      </li>
    </ul>
    <div class="dropdown">
      <button class="btn btn-outline-white dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        My account
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Profile</a>
        <a class="dropdown-item" href="#">Settings & Privacy</a>
        <a class="dropdown-item" href="#">Help</a>
        <a class="dropdown-item" href="#">Sign out</a>
      </div>
    </div>
  </div>
</div>
</nav>
)

    }

}

export default Nav;