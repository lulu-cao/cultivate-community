let generalResourcesBtn = document.getElementById("generalResourcesBtn;")
let aaMeetingsBtn = document.getElementById("aaMeetingsBtn");
let careTeamsBtn = document.getElementById("careTeamsBtn");
let emergencyLinesBtn = document.getElementById("emergencyLinesBtn");

let generalResources = document.getElementById("generalResources");
let aaMeetings = document.getElementById("aaMeetings");
let careTeams = document.getElementById("careTeams");
let emergencyLines = document.getElementById("emergencyLines");

// generalResourcesBtn.addEventListener("click", function() {
//     aaMeetings.classList.remove("active");
//     aaMeetings.classList.remove("show");
//     careTeams.classList.remove("active");
//     careTeams.classList.remove("show");
//     emergencyLines.classList.remove("active");
//     emergencyLines.classList.remove("show");
    
//     generalResources.classList.add("active");
//     generalResources.classList.add("show");
// });

aaMeetingsBtn.addEventListener("click", function() {
    generalResources.classList.remove("active");
    generalResources.classList.remove("show");
    careTeams.classList.remove("active");
    careTeams.classList.remove("show");
    emergencyLines.classList.remove("active");
    emergencyLines.classList.remove("show");
    
    aaMeetings.classList.add("active");
    aaMeetings.classList.add("show");
});

careTeamsBtn.addEventListener("click", function() {
    generalResources.classList.remove("active");
    generalResources.classList.remove("show");
    aaMeetings.classList.remove("active");
    aaMeetings.classList.remove("show");
    emergencyLines.classList.remove("active");
    emergencyLines.classList.remove("show");

    careTeams.classList.add("active");
    careTeams.classList.add("show");
});

emergencyLinesBtn.addEventListener("click", function() {
    generalResources.classList.remove("active");
    generalResources.classList.remove("show");
    aaMeetings.classList.remove("active");
    aaMeetings.classList.remove("show");
    careTeams.classList.remove("active");
    careTeams.classList.remove("show");
    
    emergencyLines.classList.add("active");
    emergencyLines.classList.add("show");
});
