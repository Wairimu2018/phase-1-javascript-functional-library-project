//function myEach(array, callback){
    //for(let i=0; i < array.length; i++){
        //callback(array[i]);
    //}
//}

const myInput = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
}
const myEach = function(collection, callback) {
    const newCollection = myInput(collection);
    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
    }
    return collection;
}

 function myMap(collection, callback){
    let newCollection = myInput(collection)
   let newArr = [];
     for (let i=0; i < newCollection.length; i++){
         newArr.push(callback(newCollection[i]));
   }
     return newArr;
}
function myReduce (collection, callback, initValue){
    let newCollection = myInput(collection);
if (!initValue){
    initValue = newCollection[0]
    newCollection = newCollection.slice(1);
}
let length = newCollection.length;
for (let i=0; i < length; i++){
    initValue = callback(initValue, newCollection[i], newCollection);
}
return initValue;
}

function myFind (collection, predicate) {
    let newCollection = myInput(collection);
    for (let i=0; i <newCollection.length; i++){
      if(predicate(newCollection[i])) return newCollection[i];
      }
      return undefined;
    }

function myFilter (collection, predicate){
let newCollection = myInput(collection);
let newArr = [];
for (let i=0; i <newCollection.length; i++){
    if(predicate(newCollection[i])) newArr.push(newCollection[i]);
}
return newArr;
}

function mySize (collection){
    let newCollection = myInput(collection);
    return newCollection.length; 
}
function myFirst (collection, stop=false) {
    return (stop) ? collection.slice(0, stop) : collection[0];
}
function myLast (collection, start=false){
    return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1];
}

function myKeys (a){
    let keys = [];
    for (let key in a){
        keys.push(key);
    }
    return keys;
}
function myValues (b){
    let values = [];
    for (let value in b){
        values.push(b[value]);
    }
    return values;
}
