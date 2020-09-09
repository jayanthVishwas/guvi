var obj = {name: "ISRO", age: 35, role: "Scientist"};



// Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
// Input (Object):
// var object = {name: “ISRO”, age: 35, role: “Scientist”};
// Output:
// [[“name”, “ISRO”], [“age”, 35], [“role”, “Scientist”]]

function convertListToObject(obj) {
 // your code here
let a=[]
 for(key in obj){
   let temp=[]
   temp.push(key)
   temp.push(obj[key])
   a.push(temp)
 }

console.log(a)
}

convertListToObject(obj)
