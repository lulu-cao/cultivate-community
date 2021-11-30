import React from 'react'; 
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer'; 
import '../html-css/css/home-guest.css'

function Home() {
  return (
    <div>
      <Nav />
        <div className="col-lg-8 mx-auto p-3 py-md-5">
          <main>
          <img src="https://everydaypower.com/wp-content/uploads/2019/05/110-Beautiful-Happy-Quotes-About-Life-to-Lift-Your-Mood-1000x600.jpg" alt="Hero" id="profilePic"/>
          <br/>
          <br/>
          <h1>Cultivate Community</h1>
          <p className="fs-5 col-md-8">As mental health resources and responses are lacking for many marginalized communities, this web application provides useful tools and resources for people who are seeking mental health resources.</p>
          <div className="mb-5">
            <button className="btn btn-success btn-lg px-4"><Link to="/about">Learn More</Link></button>
          </div>
          <div className="row g-5">
            <div className="col-md-6">
              <h2>Mental Health is A Priority</h2>
              <p>Gen Zs and millennials ranked their mental health as their first or second priority in life, with only physical health ranking higher on the list of priorities.</p>
              <div className="mb-5">
                <button className="btn btn-success btn-lg px-4"><Link to="/resources">Resources</Link></button>
              </div>
            </div>
            <div className="col-md-6">
              <h2> CC Resources</h2>
              <p>Frequently Used Resources</p>
              <ul className="icon-list">
                <li><Link to="/resources">Alternate Alert Response</Link></li>
                <li><Link to="/resources">General Resources</Link></li>
                <li><Link to="/resources">Care Teams</Link></li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    <Footer />
    </div>
  )
}

export default Home;