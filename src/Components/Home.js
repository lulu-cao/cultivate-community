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
<Footer />
</div>
)
      
    }
export default Home;