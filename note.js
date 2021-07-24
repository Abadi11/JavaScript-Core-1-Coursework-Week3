function findSafeOxygenLevel(oxygen) {
  let numberOfPercentage =[];
  for (let i = 0; i<oxygen.length; i++){
  oxygen[i].replace("%","");
  let oxygenParseFloat = [];
  //console.log(oxygenParseFloat)
  oxygenParseFloat[i] = parseFloat(oxygen[i]);
  //console.log(oxygenParseFloat[i])
  numberOfPercentage.push(oxygenParseFloat[i])
}
function findOxygen (num){
  if (num > 19.5 && num < 23.5){
  return true;
  }else{
    return false;
  }
}
let safeOxygen = numberOfPercentage.find(findOxygen);
if (safeOxygen === undefined){
  process.exit(1);
}
console.log(typeof safeOxygen)
return safeOxygen.toString() + "%"
}
console.log(findSafeOxygenLevel(["50"]))


