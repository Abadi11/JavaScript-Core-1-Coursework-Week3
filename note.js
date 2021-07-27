function sortAges(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (typeof (arr[i]) === "number" ){
    newArr.push(arr[i]);
    }
  }
  
  let sortedArr= newArr.sort((a,b) => a - b); // I can not sort ascending numbers without built in methods because it will take a lot of time to understand how it works as it is very difficult and I am running out of time, but I will keep it in my mind, sorry
  return sortedArr;
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

