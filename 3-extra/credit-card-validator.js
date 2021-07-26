function isCreditCardValidate (numberCard){
 let output;
 numberCard = numberCard.toString().split("");
 let newArr=[];
 for (let i = 0; i < numberCard.length; i++){
  numberCard [i]= parseInt(numberCard[i])
  newArr.push(numberCard[i])
 }

 // now the new Array is number 
 console.log(newArr)
 // function to check every element is just a number
 function checkDigit(num){
  if (Number.isNaN(num)){
    return true;
  }else{
    return false;
  }
}


// Checking if the credit card is validated or not
 if (newArr.length !== 16){
  output = "Number must be 16 digits"
 }else if (newArr.some(checkDigit)){
  output = "All of the items must be numbers"
 }else if ((newArr[15]) % 2 !== 0 ){
  output = "The final digit must be even"
 }else if (newArr.reduce((a,b) => a+b) <= 16){
  output = "The sum of all the digits must be greater than 16"
 }else{
  output = "It is validate"
 }
 // The credit card number must be composed of at least two different digits (i.e. all of the digits cannot be the same) I took it from google :)
 var obj = {};
 for (let i = 0; i< newArr.length; i++){
  obj[newArr[i]] = true;
 }
 if (Object.keys(obj).length < 2) {
  output = "The credit card number must be composed of at least two different digits";
 }
 return output
}

var number = "4444444555151662";
console.log(isCreditCardValidate(number))