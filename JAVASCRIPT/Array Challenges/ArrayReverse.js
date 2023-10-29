function reverse(arr) {
    var output = [];
  while (arr.length) {
    output.push(arr.pop());
  }
    arr = output;

    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]