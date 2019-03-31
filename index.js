
function findMatching(namesArray, name){
  const matches = namesArray.filter(match => match.toLowerCase() === name.toLowerCase())
  return matches
}

// function
function fuzzyMatch(array, char) {
  const matches = array.filter(name => stringMatch(char, name));
  return matches
}

function stringMatch(str1, str2) {
  for (let i = 0; i < str1.length; i++){        returnValue = str1[i] === str2[i];
  }
  return returnValue;
}

function matchName(drivers, str){
  return drivers.filter(function (driver){
    if (driver.name === str) {
      return name
    }
  }
  )
}
