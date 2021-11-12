import Header from './Components/Header';
import Footer from './Components/Footer'; 
import React, { Component } from 'react'; 

class Home extends Component {

    sendAlert() {
        Email.send({
            Host: "smtp.gmail.com",
            Username: "emergency.cultivatecommunity@bewaterwsnc.com",
            Password: "genericP@$$WORD",
            To: "jillian.sechrest@bewaterwsnc.com",
            From: "emergency.cultivatecommunity@bewaterwsnc.com",
            Body: "***CARE WEB EMERGENCY - IMMEDIATE ASSISTANCE REQUIRED: -USERS GELOCATION FROM BROWSER-",   
        }).then(
            message => alert("Alert Sent Successfully")
        )
    }

    render() {

        return (

//This is the area where you paste your HTML codes
<div>
<Header />
<body>
<script src="https://smtpjs.com/v3/smtp.js"></script>
   <script src="index.js"></script>
<div>
    <form method="post">
        <input type="button" value="SEND CRISIS ALERT" onClick="sendAlert()"/>
        </form>
        </div>
        </body>
<Footer />
</div>
)

    }

}

export default Home;

/*geo = navigator.geolocation
    if ('geolocation' in navigator) {
}
    else {

    }*/