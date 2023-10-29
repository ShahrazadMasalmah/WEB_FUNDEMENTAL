function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    var i=0;
   while(n > 2){
      fibArr[i+2]= fibArr[i]+fibArr[i+1];
      i++;
      n--;
   }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
var result = fibonacciArray(6);
console.log(result); 
var result = fibonacciArray(12);
console.log(result); 