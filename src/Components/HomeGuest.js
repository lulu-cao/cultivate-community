import React from 'react'; 
import Nav from './Nav';
import Footer from './Footer'; 

function HomeGuest() {

    // const sendAlert = () => {
    //    Email.send({
    //         Host: "smtp.gmail.com",
    //         Username: "emergency.cultivatecommunity@bewaterwsnc.com",
    //         Password: "genericP@$$WORD",
    //         To: "jillian.sechrest@bewaterwsnc.com",
    //         From: "emergency.cultivatecommunity@bewaterwsnc.com",
    //         Subject: "***CARE WEB EMERGENCY***",
    //         Body: "***CARE WEB EMERGENCY - IMMEDIATE ASSISTANCE REQUIRED: -USERS GELOCATION FROM BROWSER-",   

    //     }).then(message => alert("Alert Sent Successfully"))
    // }


      return (

//This is the area where you paste your HTML codes
<div>

{/* <script src="https://smtpjs.com/v3/smtp.js"></script>
    <form method="post">
        <input type="button" value="SEND CRISIS ALERT" onClick={()=>{sendAlert()}}/>
        </form> */}

        <Nav />
    <main>
    {/* Change Syntax of img to JS?*/}
    <img src="https://everydaypower.com/wp-content/uploads/2019/05/110-Beautiful-Happy-Quotes-About-Life-to-Lift-Your-Mood-1000x600.jpg" alt="mental health" id="profilePic"/>
    <br/>
    <br/>
    <h1>Cultivate Community</h1>
    <p className="fs-5 col-md-8">As mental health resources and responses are lacking for many marginalized communities, this web application provides useful tools and resources for people who are seeking mental health resources.</p>

    <div className="mb-5">
      <a href="./about-guest.html" className="btn btn-success btn-lg px-4">Learn More</a>
    </div>


    <div className="row g-5">
      <div className="col-md-6">
        <h2>Mental Health is A Priority</h2>
        <p>Gen Zs and millennials ranked their mental health as their first or second priority in life, with only physical health ranking higher on the list of priorities.</p>
        
        {/* 
        <ul className="icon-list">
          <li><a href="#" rel="noopener" target="_blank">List</a></li>
          <li className="text-muted">Muted text here</li>
        </ul>
        */}
     
        <div className="mb-5">
          <a href="./resource-guest.html" className="btn btn-success btn-lg px-4">Resources</a>
        </div>
      </div>
      

      <div className="col-md-6">
        <h2> CC Resources</h2>
        <p>Frequently Used Resources</p>
        {/* This three links might need update*/}
        <ul className="icon-list">
          <li><a href="./resource-guest.html">Alternate Alert Response</a></li>
          <li><a href="./resource-guest.html">General Resources</a></li>
          <li><a href="./resource-guest.html">Care Teams</a></li>
        </ul>
      </div>
    </div>
  </main>
<Footer />
</div>
)

// const Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
    }
export default HomeGuest;