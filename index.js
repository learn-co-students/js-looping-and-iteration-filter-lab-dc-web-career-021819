// Code your solution in this file

function findMatching(objects, target) {
  return objects.filter(function (name) { return name.toLowerCase() === target.toLowerCase();});
}

function fuzzyMatch(objects, target) {
  return objects.filter(function (name) {
    return name.slice(0, target.length) === target;
  });
}

function matchName(objects, target) {
  return objects.filter(function (driver) {
    return driver.name.toLowerCase() === target.toLowerCase();
  });
}
