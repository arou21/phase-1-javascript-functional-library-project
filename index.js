function getArray(collection) {
  let newArray; 
  if(Array.isArray(collection)) {
newArray = collection
  }
  else {
newArray = Object.values(collection)
  }
  return newArray
}
function myEach(collection, callback) {
  const newArray = getArray(collection)
  for(let i = 0; i < newArray.length; i++) {
    callback(newArray[i])
  }
  return collection
}

function myMap(collection, callback) {
const newArray = getArray(collection)
const mappedArray = []
for(let i = 0; i < newArray.length; i++) {
mappedArray[i] = callback(newArray[i])
}
return mappedArray
}

function myReduce(collection, callback, acc) {
  const newArray = getArray(collection)
  let combainValues = acc || newArray[0]
  for(let i = 0; i < newArray.length; i++){
    if(!acc && i === 0) {
      console.log('ignor')
    }
    else {
   combainValues = callback(combainValues, newArray[i], newArray)}
  }
  return combainValues
}

function myFind(collection, predicate) {
const newArray = getArray(collection)
for(let i = 0; i < newArray.length; i++) {
  if(predicate(newArray[i])) {
    return (newArray[i])
  }
}
}

function myFilter(collection, predicate) {
  const newArray = getArray(collection)
  let filterArray = []
  for(let i = 0; i < newArray.length; i++) {
    if(predicate(newArray[i])){
      filterArray .push(newArray[i])
    }
  }
return filterArray
}

function mySize(collection) {
  const newArray = getArray(collection)
  return newArray.length
}

function myFirst(array, stopIndex) {
  if(!stopIndex || stopIndex < 0) return array[0]
  let newArray = []
  for(let i = 0; i < stopIndex; i++){
      newArray .push(array[i])
  
  }
  return newArray
}

function myLast(array, stopIndex) {
  if(!stopIndex) return array[array.length -1]
  let newArray = [] 
    for(let i = 0; i < array.length; i++) {
let startIndex = array.length - stopIndex 
if(startIndex <=i ) {
newArray.push(array[i])
}
  
  }
  return newArray
}