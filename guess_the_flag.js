
var score = 0;
var timer = 60
var current_image = "afghanistan.png";
var replacedString;
var flagsList = ["afghanistan.png", "argentina.png", "australia.png", "austria.png", "bangladesh.png", "belgium.png", "bosnia and herzegovina.png", "brazil.png" ,"cambodia.png", "canada.png ","china.png", "croatia.png" ,"cuba.png", "denmark.png", "egypt.png", "estonia.png", "finland.png", "france.png", "germany.png" ,"greece.png","india.png", "indonesia.png" ,"iran.png", "iraq.png" ,"israel.png" ,"italy.png" ,"japan.png" ,"latvia.png" ,"lesotho.png", "malaysia.png" ,"maldives.png" ,"mexico.png","mongolia.png", "new zealand.png", "nigeria.png", "north korea.png", "norway.png", "pakistan.png", "peru.png", "philippines.png", "portugal.png ","qatar.png", "romania.png", "russia.png", "saudi arabia.png" ,"singapore.png", "south africa.png" ,"south korea.png" , "south sudan.png",  "spain.png", "sri lanka.png",  "sudan.png", "sweden.png", "taiwan.png", "thailand.png", "turkey.png", "uae.png",  "UK.png", "uruguay.png", "US.png", "vietnam.png"]
window.addEventListener("load", (event) => {
    var current_image = flagsList[Math.floor(Math.random() * (flagsList.length-1 + 1))];
    var replacedString = current_image.replace(".png", '')
    document.getElementById("mainImage").src = current_image;
    
});
document.addEventListener('submit', function(event) {
    event.preventDefault();
    var answer = document.getElementById("flagInput").value;
    
    console.log(current_image)
    if (answer == replacedString){
        score ++;
        console.log("correct");

    }
    else {
        score --;
        
    }
    var current_image = flagsList[Math.floor(Math.random() * (flagsList.length-1 + 1))];
    document.getElementById("mainImage").src = current_image;
    document.getElementById("score").innerText = score;
    
});

setInterval(updateTime, 1000);
function updateTime(){
    timer --;
    document.getElementById("timer").innerText = timer;
    if (timer == 0){
        timer = 60;
    }
}