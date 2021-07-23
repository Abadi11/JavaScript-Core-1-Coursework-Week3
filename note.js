function getEligibleStudents(arr) {
  let newArr=[];
  for (let i = 0; i < arr.length; i++){
    if (arr[i][1] >= 8){
      newArr.push(arr[i])
    }
  }
  return newArr;
}

console.log(getEligibleStudents([
    ["Ahmed", 8],
    ["Clement", 10],
    ["Elamin", 6],
    ["Adam", 7],
    ["Tayoa", 11],
    ["Nina", 10],
  ]))
