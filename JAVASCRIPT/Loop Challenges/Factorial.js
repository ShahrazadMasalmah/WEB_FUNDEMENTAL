var product = 1;
var factorial = "";
for(var indx = 1; indx <= 12; indx++){
    product *= indx;
    factorial = factorial + indx + " * "  ;
}
console.log(factorial);
console.log(product);