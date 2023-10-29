var getElement = document.querySelector("#number");
var getElement2 = document.querySelector("#number2");
var getElement3 = document.querySelector("#number3");
var numbers = [9, 12, 9];

function increaseLikes() {
    numbers[0] ++;
    getElement.innerText = numbers[0];
}

function increaseLikes2() {
    numbers[1] ++;
    getElement2.innerText = numbers[1];
}

function increaseLikes3() {
    numbers[2] ++;
    getElement3.innerText = numbers[2];
}