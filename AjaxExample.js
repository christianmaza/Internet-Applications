function getForecast() {
   var zipcode = document.getElementById("zip").value;
   var xhr = new XMLHttpRequest();
   xhr.addEventListener("load", responseReceivedHandler);   
   xhr.open("GET", "https://wp.zybooks.com/weather.php?zip=" + zipcode);
   xhr.responseType = "json";
   xhr.send();
}
   var html = "";
function responseReceivedHandler() {
   if (this.response.success) {      
   html = "<h1>Forecast</h1>"; //do html += to add the same response format below when clicking the search button
   //html += this.response; for json and dont add the rest in the function
   
   html += "<ol>";
   for (var day of this.response.forecast) {
   html += "<li>" + day.desc + ": high is " + day.high + ", low is " + day.low + "</li>";
   }      
   html += "</ol>";
   }else { 
    html = "<h1>Error: " + this.response.error + "<h1>"; 
   }
   

   document.getElementById("forecast").innerHTML = html;
}

document.getElementById("search").addEventListener("click", getForecast);