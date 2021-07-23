function getTransportModes(mode) {
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
