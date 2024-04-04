const hex = "0123456789ABCDF"

function randomColour(){
    let colour = "#"

    for(let i=0; i<6; i++){
        colour += hex[Math.floor(Math.random() * 16)]
    }

    return colour;
}

let intervalId;
const startChangeColour = function(){
    if(intervalId == null){
        intervalId = setInterval(changeBgColour,1000)
    }
    const changeBgColour = function(){
        document.body.style.backgroundColor = randomColour();
    } 
}

const stopChangeColour = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector("#start")
.addEventListener("click",startChangeColour);

document.querySelector("#stop")
.addEventListener("click",stopChangeColour);