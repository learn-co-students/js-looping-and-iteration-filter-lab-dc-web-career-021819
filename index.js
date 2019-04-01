// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(function (str) {return str.toLowerCase() === name.toLowerCase(); });
}

function fuzzyMatch(drivers, namePartial){
  return drivers.filter(function (str) {return str.startsWith(namePartial) });
}

function matchName(drivers, name){
  return drivers.filter(function (obj) {return obj.name === name });
}
