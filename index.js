// Code your solution in this file

function findMatching(arr, match) {
  filt = arr.filter(name => {
    return name.toUpperCase() === match.toUpperCase();
  });
  return filt;
}

function fuzzyMatch(arr, match) {
  filt = arr.filter(name => {
    return name[0] === match[0];
  });
  return filt;
}

function matchName(arr, match) {
  filt = arr.filter(element => {
    return element.name === match;
  });
  return filt;
}
