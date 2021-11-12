import React from 'react'; 
import Nav from './Nav';
import '../html-css/css/app.css';
import '../html-css/css/resource.css'

function About(props) {
  return (
    <div>
      <Nav />
      <main>
      <br/>
      <div className="container">
        <h1>About This Project</h1>
        <p>
          As mental Health resources and responses are lacking for many marginalized communities, this web application provides useful tools and resources for people who are seeking mental health resources. 
        </p>
        <p>
          More features will be allowed for a registered user. A registered user can load "care contacts" (trusted individuals). If a user notices triggers for a mental health emergency, they can then use the app to drop their location to their care contacts as well as local community response teams. Registered users can also find local resources for drug/alcohol counseling assistance with a search class being "Partner/Spousal Support".
        </p>
        <p>This webpage is the result of a hackathon organized by <a href="https://girldevelopit.com/">Girl Develop It</a>. Girl Develop It is a nonprofit organization that provides affordable programs for adult women and non-binary individuals to learn web and software developing in a judgement free environment.</p>
        
        <br/>
        <h1>About Us</h1>
        <p>Cultivate Community is a group of web developers who are passionate about spreading mental health resources.</p>
        
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card" style={{width: "18rem"}}>
                <img src={process.env.PUBLIC_URL + "/images/jilly.jpg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Jillian Sechrest</h5>
                  <p className="card-text">Back-end Web Developer</p>
                  <a href="https://github.com/Sechrest-J" className="btn btn-primary">GitHub Profile</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{width: "18rem"}}>
                <img src={process.env.PUBLIC_URL + "/images/lulu.jpg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Lulu Cao</h5>
                  <p className="card-text">Front-end Web Developer</p>
                  <a href="https://github.com/lulu-cao" className="btn btn-primary">GitHub Profile</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{width: "18rem"}}>
                <img src={process.env.PUBLIC_URL + "/images/placeholder.png"} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Katrina Behnken</h5>
                  <p className="card-text">Back-end Web Developer</p>
                  <a href="https://github.com/kbehnken" className="btn btn-primary">GitHub Profile</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card" style={{width: "18rem"}}>
                <img src={process.env.PUBLIC_URL + "/images/tracey.jpg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Tracey Hebert</h5>
                  <p className="card-text">Front-end Web Developer</p>
                  <a href="https://github.com/traceyhebert9" className="btn btn-primary">GitHub Profile</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{width: "18rem"}}>
                <img src={process.env.PUBLIC_URL + "/images/alejandra.jpg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Alejandra P. Hernandez</h5>
                  <p className="card-text">Front-end Web Developer</p>
                  <a href="https://github.com/alepehernandez" className="btn btn-primary">GitHub Profile</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{width: "18rem"}}>
                <img src={process.env.PUBLIC_URL + "s/placeholder.png"} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Anja Wiesner</h5>
                  <p className="card-text">Content Manager</p>
                  <a href="https://github.com/awiesn" className="btn btn-primary">GitHub Profile</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card" style={{width: "18rem"}}>
                <img src={process.env.PUBLIC_URL + "/images/placeholder.png"} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Dooz Zher</h5>
                  <p className="card-text">Content Manager</p>
                  <a href="https://github.com/doozher" className="btn btn-primary">GitHub Profile</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{width: "18rem"}}>
                <img src={process.env.PUBLIC_URL + "/images/placeholder.png"} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Sumaia Ali</h5>
                  <p className="card-text">Full-stack Web Developer</p>
                  <a href="https://github.com/Sumaia45" className="btn btn-primary">GitHub Profile</a>
                </div>
              </div>
            </div>
            <div className="col">
              
            </div>
          </div>
        </div>       
      </div>
    </main>
    </div>
  )
}

export default About;