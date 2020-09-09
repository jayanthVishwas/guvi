/*
Write a function called "transformGeekData" that transforms some set of data from one format to another.
Input (Array):
var array = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
Output:
[
{firstName: "Vasanth", lastName: "Raja", age: 24, role: "JSWizard"},
{firstName: "Sri", lastName: "Devi", age: 28, role: "Coder"}
]
*/

var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]],
          [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];

function transformEmployeeData(arr) {
 var tranformEmployeeList = [];

 for(let i=0; i<arr.length; i++){
   let obj={}
   for(let j=0; j<arr[i].length;j++){
     obj[arr[i][j][0]] = arr[i][j][1]
   }
   tranformEmployeeList.push(obj)
 }

 //Your code

 return tranformEmployeeList;
}

let a = transformEmployeeData(arr)
console.log(a)
