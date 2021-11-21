import React from 'react'; 
import NavUser from './NavUser';
import FooterUser from './FooterUser';
import '../html-css/css/about.css'

function AboutUser(props) {
  return (
    <div>
      <NavUser />
      <main>
      <br/>
      <div className="container">
        <h1>About This Project</h1>
        <p>
          Mental Health resources and emergency response are lacking and often involve municipal law enforcement. This has led to escalated situations where individuals in crisis were severely injured or killed. Many individuals thus avoid seeking assistance/help due to the fear of law enforcement involvement. Cultivate Community is a website that provides a litany of local community resources and support for those in distress, or who love and care for those dealing with mental health struggles and diseases like addiction. It also provides an alternate response model for individuals in mental health crisis.
        </p>
        <p>
          The Cultivate Community project aims to aid as a bridge to reduce interaction between individuals in crisis and law enforcement. It can provide an alternate response model that utilizes both personal care webs and community directed resources. These resources allow those in crisis to have one less impediment to seeking vital care. Future features will include those requiring the assistance of violence interrupters, immigration defense teams, and for individuals who feel as if they are in an unsafe situation.
        </p>
        <p>
          This website is the result of a hackathon event organized by <a href="https://girldevelopit.com/">Girl Develop It</a>. Girl Develop It is a nonprofit organization that provides affordable programs for adult women and non-binary individuals to learn web and software developing in a judgement free environment.
        </p>
        
        <br/>
        <h1>About Us</h1>
        <p>Cultivate Community is a group of web developers who are passionate about spreading mental health resources.</p>
        
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card" style={{width:"18rem"}}>
                <img src={process.env.PUBLIC_URL + "/images/jilly.jpg"} className="card-img-top custom-img" alt="Jillian Sechrest"/>
                <div className="card-body">
                  <h5 className="card-title">Jillian Sechrest</h5>
                  <p className="card-text">Back-end Web Developer</p>
                  <a href="https://github.com/bewaterwsnc" className="btn btn-success">GitHub Profile</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{width:"18rem"}}>
                <img src={process.env.PUBLIC_URL + "/images/lulu.jpg"} className="card-img-top custom-img" alt="Lulu Cao"/>
                <div className="card-body">
                  <h5 className="card-title">Lulu Cao</h5>
                  <p className="card-text">Front-end Web Developer</p>
                  <a href="https://github.com/lulu-cao" className="btn btn-success">GitHub Profile</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{width:"18rem"}}>
                <img src={process.env.PUBLIC_URL + "/images/placeholder.png"} className="card-img-top custom-img" alt="Katrina Behnken"/>
                <div className="card-body">
                  <h5 className="card-title">Katrina Behnken</h5>
                  <p className="card-text">Back-end Web Developer</p>
                  <a href="https://github.com/kbehnken" className="btn btn-success">GitHub Profile</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card" style={{width:"18rem"}}>
                <img src={process.env.PUBLIC_URL + "/images/tracey.jpg"} className="card-img-top custom-img" alt="Tracey Hebert"/>
                <div className="card-body">
                  <h5 className="card-title">Tracey Hebert</h5>
                  <p className="card-text">Front-end Web Developer</p>
                  <a href="https://github.com/traceyhebert9" className="btn btn-success">GitHub Profile</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{width:"18rem"}}>
                <img src={process.env.PUBLIC_URL + "/images/alejandra.jpg"} className="card-img-top custom-img" alt="Alejandra Hernandez"/>
                <div className="card-body">
                  <h5 className="card-title">Alejandra P. Hernandez</h5>
                  <p className="card-text">Content Manager</p>
                  <a href="https://github.com/alepehernandez" className="btn btn-success">GitHub Profile</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{width:"18rem"}}>
                <img src={process.env.PUBLIC_URL + "/images/anja1.jpg"} className="card-img-top custom-img" alt="Anja Wiesner"/>
                <div className="card-body">
                  <h5 className="card-title">Anja Wiesner</h5>
                  <p className="card-text">Content Manager</p>
                  <a href="https://github.com/awiesn" className="btn btn-success">GitHub Profile</a>
                </div>
              </div>
            </div>
          </div>
        </div>     
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card" style={{width:"18rem"}}>
                <img src={process.env.PUBLIC_URL + "/images/placeholder.png"} className="card-img-top custom-img" alt="Dooz's Photo"/>
                <div className="card-body">
                  <h5 className="card-title">Dooz Zher</h5>
                  <p className="card-text">Content Manager</p>
                  <a href="https://github.com/doozher" className="btn btn-success">GitHub Profile</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{width:"18rem"}}>
            
              </div>
            </div>
            <div className="col">
              <div className="card" style={{width:"18rem"}}>
              
              </div>
            </div>
          </div>
        </div>           
      </div>
    </main>
    <FooterUser />
    </div>
  )
}

export default AboutUser;