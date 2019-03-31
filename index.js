// Code your solution in this file
function findMatching(collection, name) {
  let newObj = []
  for (let item of collection) {
    if (item.toLowerCase() === name.toLowerCase()) {
      newObj.push(item)
    }
  }
  return newObj
}

function fuzzyMatch(collection1, namePart) {
  let nwObj = []
  for (let item of collection1) {
    if (item.startsWith(namePart) === true) {
      nwObj.push(item)
    }
  }
  return nwObj
}

function matchName(collection, name_given) {
  let newObj = []
  for (let index of collection) {
    if (index["name"] === name_given) {
      newObj.push(index)
    }
  }
  return newObj
}
