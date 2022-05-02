document.querySelector("#masaiForm").addEventListener("submit",matchSubmit);

var matchArr = JSON.parse(localStorage.getItem("schedule")) || [];

function matchSubmit() {
    event.preventDefault();

    var matchObj = {
       
        matchNumber: document.querySelector("#matchNum").value,
        teamTypeA: document.querySelector("#teamA").value,
        teamTypeB: document.querySelector("#teamB").value,
        scheduleDate:document.querySelector("#date").value,
        scheduleVenue:document.querySelector("#venue").value,
    };

    matchArr.push(matchObj);
    console.log(matchArr)
    localStorage.setItem("schedule",JSON.stringify(matchArr));


    //nextPage

    window.location.href="matches.html"

    
}