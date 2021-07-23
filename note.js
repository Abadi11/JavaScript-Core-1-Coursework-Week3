function sortArray(arr) {
 
   return arr.sort();
  
}
console.log(sortArray(["a", "n", "c", "e", "z", "f"]))

function formatPercentage(arr) {
let newArr = [];
for (let i = 0; i < arr.length; i++){
  arr[i].toFixed(2);
  arr[i] = arr[i] + "%";
  if (arr[i] > 100) {
  arr[i] = "100.00%";
  }
  arr[i].toString();
  newArr.push(arr[i]);
}
return newArr
}

console.log(formatPercentage([23, 18.103, 187.2, 0.372]))
