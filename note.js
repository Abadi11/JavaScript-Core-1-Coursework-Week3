function sortAges(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (typeof (arr[i]) === "number" ){
    newArr.push(arr[i]);
    }
  }
  let sortArr= []
  for (let i = 0; i < newArr.length; i++){
    if (newArr[i-1] > newArr[i]){
    sortArr.push(newArr[i-1])
    }
  }
  return sortArr
}
const agesCase1 = [
  "🎹",
  100,
  "💩",
  55,
  "🥵",
  "🙈",
  45,
  "🍕",
  "Sanyia",
  66,
  "James",
  23,
  "🎖",
  "Ismeal",
];
console.log(sortAges(agesCase1))

