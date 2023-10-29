var sum = 0;
var sigma = "";
for(indx = 1; indx <= 100; indx++){
    sum += indx;
    sigma = sigma + indx + " + ";
}
console.log(sigma);
console.log("The sum of numbers is: " + sum);
