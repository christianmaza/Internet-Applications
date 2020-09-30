function parseScores(scoresString) {
    return scoresString.split(" ");
}

function buildDistributionArray(scoresArray) {
    var distributeArray = [0,0,0,0,0]; 
    for (var score of scoresArray){
        if(score >= 90){
            distributeArray[0]++;
        }
        else if(score < 90 && score >= 80){
            distributeArray[1]++;
        }
        else if(score < 80 && score >= 70){
            distributeArray[2]++; 
        }
        else if(score < 70 && score >= 60){
            distributeArray[3]++;
        }
        else{
            distributeArray[4]++;
        }
    } 
    return distributeArray;
}

function setTableContent(userInput) { 
    if(!userInput.length){
        return;
    }
    var tableArray;
    tableArray = buildDistributionArray(parseScores(userInput));

    for(var i = 0; i < tableArray.length; i++){
        tableArray[i] *= 10;
    }

    var table = document.getElementById("distributionTable");
    table.innerHTML = "<tbody><tr><td><div></div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td></tr><tr><td><div></div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td></tr><tr><td><div></div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td></tr></tbody>"; 

    
    for(var i = 0; i < tableArray.length; i++){
        document.getElementsByTagName("tr")[0].childNodes[i].childNodes[0].classList.add("bar" + i);
        document.getElementsByTagName("tr")[0].childNodes[i].childNodes[0].style.setProperty("height", (tableArray[i]) + "px");
        document.getElementsByTagName("tr")[0].childNodes[i].childNodes[0].style.setProperty("width", 10 + "px");
    }
    
        document.getElementsByTagName("tr")[1].childNodes[0].childNodes[0].innerHTML = "A";
        document.getElementsByTagName("tr")[1].childNodes[1].childNodes[0].innerHTML = "B";
        document.getElementsByTagName("tr")[1].childNodes[2].childNodes[0].innerHTML = "C";
        document.getElementsByTagName("tr")[1].childNodes[3].childNodes[0].innerHTML = "D";
        document.getElementsByTagName("tr")[1].childNodes[4].childNodes[0].innerHTML = "F";

    for(var i = 0; i < tableArray.length; i++){
        document.getElementsByTagName("tr")[2].childNodes[i].childNodes[0].innerHTML = (tableArray[i] / 10);
    }
}

function bodyLoaded() {
    // The argument passed to writeTableContent can be changed for 
    // testing purposes
    setTableContent("45 78 98 83 86 99 90 59");
}