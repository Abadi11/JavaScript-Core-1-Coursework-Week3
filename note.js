function sortAges(arr) {
  let newArr = [];
  //let newArr1 = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == Number ){
     newArr.push(arr[i])
    }
    //newArr1.push(newArr[i])
  }
  return newArr
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


