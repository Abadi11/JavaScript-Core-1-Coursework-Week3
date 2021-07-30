function findSafeOxygenLevel(oxygen) {
  let numberOfPercentage =[]; //From here, I converted the numbers from Strings to Numbers
  let possibleOxygen = oxygen.filter((prece) => prece.includes("%"));
  for (let i = 0; i<possibleOxygen.length; i++){
  possibleOxygen[i].replace("%",""); // take % of from String
  let oxygenParseFloat = [];
  oxygenParseFloat[i] = parseFloat(possibleOxygen[i]); // Get numbers from string
  numberOfPercentage.push(oxygenParseFloat[i])
}// To here, Now the number of percentage is ready to compare
function findOxygen (num){
  return num > 19.5 && num < 23.5;
}
let safeOxygen = numberOfPercentage.find(findOxygen);
console.log(typeof safeOxygen)
if (typeof safeOxygen === "number"){
  return safeOxygen.toString() + "%";
//}else{
 // safeOxygen = undefinedreturn the percentage to string to appear up in the console
}
}