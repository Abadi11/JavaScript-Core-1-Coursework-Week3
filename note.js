function sortAges(arr) {
  let newArr = [];
  //let newArr1 = [];
  for (let i = 0; i < arr.length; i++){
    if (typeof (arr[i]) === "number" ){
    newArr.push(arr[i]);
    }
    

  }
  //console.log(newArr)
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
