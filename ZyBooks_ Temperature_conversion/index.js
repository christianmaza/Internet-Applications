

function bodyLoaded() {
    var celInput = document.getElementById("CInput"); 
    var fahrInput = document.getElementById("FInput"); 
    var convertButton = document.getElementById("ConvertButton");
     
    celInput.addEventListener("input", celEventHandler); 
    fahrInput.addEventListener("input", fahrEventHandler);
    convertButton.addEventListener("click", convertEventHandler);

    
}


function ConvertCtoF(degreesCelsius) {
    var fahrenheightDegrees; 
    fahrenheightDegrees = (degreesCelsius * 9/5) + 32; 
    return fahrenheightDegrees;
}

function ConvertFtoC(degreesFahrenheit) {
    var celsiusDegrees; 
    celsiusDegrees = (degreesFahrenheit - 32) * 5/9; 
    return celsiusDegrees;
}

function celEventHandler(event){
    var fahrInput = document.getElementById("FInput");
    fahrInput.value = ""; 
     
    
} 

function fahrEventHandler(event){
    var celInput = document.getElementById("CInput");
    celInput.value = ""; 
    
}

function convertEventHandler(event){
    var fahrInput = document.getElementById("FInput"); 
    var celInput = document.getElementById("CInput");
    var err = document.getElementById("ErrDiv");
    var image  = document.getElementById("WeatherImage");

    if(celInput.value != ""){
        if(isNaN(parseFloat(celInput.value))){
            err.innerHTML = celInput.value + " is not a number";
            return;
        }
        err.innerHTML = "";
        fahrInput.value = Math.floor(ConvertCtoF(celInput.value));

        if(fahrInput.value > 50){
            image.src = "warm.gif";
        }
        else if(fahrInput.value < 50 && fahrInput.value > 32){
            image.src = "cool.gif";
        }
        else if(fahrInput.value < 32){ 
            image.src = "cold.gif"
        }
        
    }

    if(fahrInput.value != ""){
        if(isNaN(parseFloat(fahrInput.value))){
            err.innerHTML = fahrInput.value + " is not a number";
            return;
        }
        err.innerHTML = "";
        celInput.value = Math.floor(ConvertFtoC(fahrInput.value));

        if(fahrInput.value > 50){
            image.src = "warm.gif";
        }
        else if(fahrInput.value <= 50 && fahrInput.value >= 32){
            image.src = "cool.gif";
        }
        else if(fahrInput.value < 32){ 
            image.src = "cold.gif"
        }
        
    }


} 
