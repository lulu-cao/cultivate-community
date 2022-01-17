import React from 'react';

function CareTeamAlert(props) {
    const sendCareAlert = function() {
        const msgHolder = document.getElementById('msg-holder');
        msgHolder.innerHTML = '';
        function success(position) {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;
            alert(`Lat: ${latitude}, Lon: ${longitude}`)
            msgHolder.style.color = 'green';
            msgHolder.innerHTML = 'Success: You have sent a crisis alert notification to your Care Team.';
        }
        function error() {
            msgHolder.style.color = 'red';
            msgHolder.innerHTML = 'Error: A system error prevented us from sending a crisis alert notification to your Care Team. Please try again.';
        }
        if(!navigator.geolocation) {
            msgHolder.style.color = 'red';
            msgHolder.innerHTML = 'Geolocation is not supported by your browser.';
            return
        } else {
            return navigator.geolocation.getCurrentPosition(success, error);
        }
    }

    return (
        <div>
            <div id="msg-holder">

            </div>
            <button type="button" className="btn btn-warning" onClick={() => {sendCareAlert()}}>Send Alert to All Care Team Members</button><br/><br/><br/>
        </div>
    )
}

export default CareTeamAlert;


// const sendAlert = () => {
    //     Email.send({
    //         Host: "smtp.gmail.com",
    //         Username: "emergency.cultivatecommunity@bewaterwsnc.com",
    //         Password: "genericP@$$WORD",
    //         To: "jillian.sechrest@bewaterwsnc.com",
    //         From: "emergency.cultivatecommunity@bewaterwsnc.com",
    //         Subject: "***CARE WEB EMERGENCY***",
    //         Body: "***CARE WEB EMERGENCY - IMMEDIATE ASSISTANCE REQUIRED: -USERS GELOCATION FROM BROWSER-",   

    //     }).then(message => alert("Alert Sent Successfully"))
    // }
    // <script src="https://smtpjs.com/v3/smtp.js"></script>
    // <form method="post">
    //     <input type="button" value="SEND CRISIS ALERT" onClick={()=>{sendAlert()}}/>
    // </form>

    // const Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };