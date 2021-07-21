/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];

function check(name){
  
  if (students.includes(name)){
    return true;
  }else{
    return false;
  }
}

var group = ["Austine", "Dany", "Swathi", "Daniel"];
var groupIsOnlyStudents = group.every(check) ; // complete this statement
if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
