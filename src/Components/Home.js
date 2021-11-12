import Header from './Header';
import Footer from './Footer'; 
<<<<<<< HEAD
import React from 'react'; 
=======
import React, { Component } from 'react'; 
>>>>>>> bedb8e62b4c62059fb4353a6d14509538c0b8d36


function Home() {

    const sendAlert = () => {
       Alert.send({
            Host: "smtp.gmail.com",
            Username: "emergency.cultivatecommunity@bewaterwsnc.com",
            Password: "genericP@$$WORD",
            To: "jillian.sechrest@bewaterwsnc.com",
            From: "emergency.cultivatecommunity@bewaterwsnc.com",
            Body: "***CARE WEB EMERGENCY - IMMEDIATE ASSISTANCE REQUIRED: -USERS GELOCATION FROM BROWSER-",   
        }).then(message => alert("Alert Sent Successfully"))


      return (

//This is the area where you paste your HTML codes
<div>
<Header />
<div>
<script src="https://smtpjs.com/v3/smtp.js"></script>
</div>
    <form method="post">
        <input type="button" value="SEND CRISIS ALERT" onClick={()=>{sendAlert()}}/>
        </form>
<Footer />
</div>
)
      }
    }
export default Home;