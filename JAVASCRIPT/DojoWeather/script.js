var getCookieElement = document.querySelector(".cookie-policy");
var getDegrees = document.querySelectorAll(".numbers");


var array = [24,18,27,19,21,16,26,21];


function displayMessage(element) {
    alert("Loading weather report...");
}


function removeCookiePolicy() {
    getCookieElement.remove();
}

function changeDegree(element) {
     
    for(i=0; i < getDegrees.length;i++){
        if(element.value == "°F"){
        getDegrees[i].innerText = Math.round((array[i] * 9/5) + 32);  
       }
       else {
        getDegrees[i].innerText = array[i]; 
       }
}
}