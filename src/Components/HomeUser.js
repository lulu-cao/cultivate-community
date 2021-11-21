import React from 'react'; 
import { Link } from 'react-router-dom';
import NavUser from './NavUser';
import FooterUser from './FooterUser'; 
import '../html-css/css/home-user.css'

function HomeUser() {

      return (

<div>

    <NavUser />
    <div class="col-lg-8 mx-auto p-3 py-md-5">
      <main>
      {/* Does syntax for this link need to be changed? */}
      <img src="https://miro.medium.com/max/1400/1*HEoLBLidT2u4mhJ0oiDgig.png" alt="Hero Picture" id="profilePic"/>
      <br/>
      <br/>
      <h1>Cultivate Community</h1>
      <p className="fs-5 col-md-8">As mental health resources and responses are lacking for many marginalized communities, this web application provides useful tools and resources for people who are seeking mental health resources.</p>

      <div className="mb-5">
        <button className="btn btn-success btn-lg px-4"><Link to="/aboutUser">Learn More</Link></button>
      </div>

      <div className="row g-5">
        <div className="col-md-6">
          <h2>Mental Health is A Priority</h2>
          <p>Gen Zs and millennials ranked their mental health as their first or second priority in life, with only physical health ranking higher on the list of priorities.</p>
          
          <div className="mb-5">
            <button className="btn btn-success btn-lg px-4"><Link to="/resourceUser">Resources</Link></button>
          </div>
        </div>

        <div className="col-md-6">
          <h2> CC Resources</h2>
          <p>Frequently Used Resources</p>
          <ul className="icon-list">
            <li><Link to="/resourceUser">Alternate Alert Response</Link></li>
            <li><Link to="/resourceUser">General Resources</Link></li>
            <li><Link to="/resourceUser">Care Teams</Link></li>
          </ul>
        </div>
      </div>
    </main>
  </div>
<FooterUser />
</div>
)
}

export default HomeUser;