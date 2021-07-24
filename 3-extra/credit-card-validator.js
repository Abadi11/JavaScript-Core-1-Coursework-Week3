function isCreditCardValidate (numberCard){
 numberCard = numberCard.toString().split("");
 let newArr=[];
 for (let i = 0; i < numberCard.length; i++){
  numberCard [i]= parseInt(numberCard[i])
  newArr.push(numberCard[i])
 }
 //console.log(newArr)
 if (newArr.length === 16 && typeof(newArr) === number && newArr[16] % 2 === 0 && newArr.reduce((a,b) => a+b) > 16){
  return true
 }
 // The credit card number must be composed of at least two different digits (i.e. all of the digits cannot be the same)
 var obj = {};
 for (let i = 0; i< newArr.length; i++){
  obj[newArr[i]] = true;
 }
 if (Object.keys(obj).length < 2) {
  return false;
 }
 return
}

var number = 4444555566664444;
console.log(isCreditCardValidate(number))