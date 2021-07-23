/*function getTransportModes(mode) {
  mode.shift();
  return mode;
}

function isAccessibleByTransportMode(arrayOfTransport, transportMode) {
  if (arrayOfTransport.includes(transportMode)){
    return true;
  }else{
    return false;
  }
}

function getLocationName(arr) {
  let location = arr.shift();
  return location;
}

function journeyPlanner(locations, transportMode) {
  // Implement the function body
  let newArr = [];
  for (let i = 0; i < locations.length; i++){
    if (isAccessibleByTransportMode(locations[i],transportMode)){
      newArr.push(getLocationName(locations[i]))
    }
  }
  return newArr
}
const londonLocations = [
  ["Angel", "tube", "bus"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
  ["Greenwich", "bus", "river boat"],
];


console.log(journeyPlanner(londonLocations, "tube"))

//console.log(journeyPlanner(londonLocations, "bus"))
*/

function validatePasswords(passwords) {
  let newArr = [];
  for (let i = 0; i < passwords.length; i++){
    if (containsUppercaseLetter(passwords[i]) && containsLowercaseLetter(passwords[i]) && containsNumber(passwords[i]) && containsSymbol(passwords[i])) {
    passwords[i] = true;
  }else{
    passwords[i] = false;
  }
  newArr.push(passwords[i])
  }
  return newArr
  
  
  
}

function containsUppercaseLetter(string) {
  return /[A-Z]/.test(string);
}

// Returns true if string contains at least one lowercase letter.
function containsLowercaseLetter(string) {
  return /[a-z]/.test(string);
}

// Returns true if string contains at least one number.
function containsNumber(string) {
  return /[0-9]/.test(string);
}

// Returns true if string contains at least one symbol.
function containsSymbol(string) {
  return /[!#$%.*&]/.test(string);
}
console.log(validatePasswords([
      "Se%5",
      "TktE.TJTU",
      "384#HsHF",
      "dvyyeyy!5",
      "tryT3729",
    ]))