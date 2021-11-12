import Header from './Header';
import Footer from './Footer'; 
import React from 'react'; 
import {Email, SMTPClient} from 'smtp-client';



function Home() {

    const sendAlert = () => {
       Email.send({
            Host: "smtp.gmail.com",
            Username: "emergency.cultivatecommunity@bewaterwsnc.com",
            Password: "genericP@$$WORD",
            To: "jillian.sechrest@bewaterwsnc.com",
            From: "emergency.cultivatecommunity@bewaterwsnc.com",
            Subject: "***CARE WEB EMERGENCY***",
            Body: "***CARE WEB EMERGENCY - IMMEDIATE ASSISTANCE REQUIRED: -USERS GELOCATION FROM BROWSER-",   

        }).then(message => alert("Alert Sent Successfully"))
    }


      return (

//This is the area where you paste your HTML codes
<div>
<Header />
<script src="https://smtpjs.com/v3/smtp.js"></script>
    <form method="post">
        <input type="button" value="SEND CRISIS ALERT" onClick={()=>{sendAlert()}}/>
        </form>


        <main className="main" role="main">
    <div className="bg-white">
      <div className="container-fluid p-0">
        <div className="row no-gutters vh-100">
          <div className="col-12 col-sm-6 order-sm-2 bg-white d-flex justify-content-center align-items-center bg-overlay-teal">
            <img src="_images/cover.jpg" className="img-fluid img-cover" alt="Cultivate Community" />
          </div>
          <div className="col-12 col-sm-6 order-sm-1 bg-light d-flex position-relative justify-content-center align-items-center">
            <div className="p-3 p-md-4 p-lg-8 w-100">
              <div className="card">
                <div className="card-body">
                  <h2 className="display-4 mb-2">Welcome!</h2>    
                  <div className="m-sm-4">
                    <form>
                      <div className="form-group">
                        <label>Username</label>
                        <input className="form-control form-control-lg" type="text" name="username" placeholder="Enter your username" />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input className="form-control form-control-lg" type="password" name="password" placeholder="Enter password" />
                      </div>
                      <div className="text-center mt-3">
                        <a href="myaccount.html" className="btn btn-lg btn-primary">Log In</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
          
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
<Footer />
</div>
)
      
    }
export default Home;