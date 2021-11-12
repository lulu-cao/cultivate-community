//index.js

function sendAlert() {
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