var obj = {
name: "Rajinikanth",
age : 33,
hasPets : false
}
let arr1=[]
let arr2=[]

// Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
// Write a function called “printAllValues” which returns an newArray of all the input object’s values.

function printAllValues(obj) {

 // your code here
 for(key in obj){
  arr1.push(obj[key])
 }
 console.log(arr1)
}

function printAllKeys(obj) {
 // your code here
 for(key in obj){
  arr2.push(key)
 }
 console.log(arr2)
}

printAllValues(obj)
printAllKeys(obj)
