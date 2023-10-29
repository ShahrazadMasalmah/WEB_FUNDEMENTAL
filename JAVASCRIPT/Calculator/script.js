var displayDiv = document.querySelector("#display");
var getEqual = document.querySelector("#equals");


function press(number) {
    if(displayDiv.innerText == 0){
        displayDiv.innerText ='';
    }
    displayDiv.innerText += number;
}

function clr() {
    displayDiv.innerText = 0;
}

function setOP(operator) {
        displayDiv.innerText = displayDiv.innerText + operator; 
        displayDiv.innerText = displayDiv.innerText + press(number);
        if(getEqual){
            calculate();
        }

}

function calculate() {
    var math = displayDiv.innerText;
    var result = eval(math);
    result = result.toFixed(2);
    displayDiv.innerText = result;
}