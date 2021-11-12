import Header from './Components/Header';
import Footer from './Components/Footer'; 
import React, { Component } from 'react'; 

class Home extends Component {

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