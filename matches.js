matchArr = JSON.parse(localStorage.getItem("schedule"));
console.log(matchArr);

displayData(matchArr);

var favouritesArr = JSON.parse(localStorage.getItem("favourites")) || [];

function venueFilter(){

    var select =document.querySelector("#filterVenue").value 


}

function displayData(data){
    data.forEach(function(elem){
        console.log(elem)

        var tr = document.createElement("tr")

        var td1 = document.createElement("td")
        td1.innerText=elem.matchNumber


        var td2 = document.createElement("td")
        td2.innerText=elem.teamTypeA


        var td3 = document.createElement("td")
        td3.innerText=elem.teamTypeB


        var td4 = document.createElement("td")
        td4.innerText=elem.scheduleDate

        var td5 = document.createElement("td")
        td5.innerText=elem.scheduleVenue


        var td6 = document.createElement("td")
        td6.innerText = "Favourites";
        td6.style.color="green";
        td6.style.cursor = "pointer";
        td6.addEventListener("click",function(){
        favouritesFunction(elem)  

        });

        tr.append(td1,td2,td3,td4,td5,td6)

        document.querySelector("tbody").append(tr);



    });


}

    function favouritesFunction(elem){
    console.log(elem)
    favouritesArr.push(elem)
    console.log(favouritesArr)
    localStorage.setItem("favourites",JSON.stringify(favouritesArr));
}