//chunk
var arr = [1, 2, 3, 4, 5, 6];
chunk(arr, 1);
function chunk(arr, size) {
    var op = [];
    var temp = [];
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        temp.push(arr[i]);
        count++;
        if (count == size) {
            op.push(temp);
            temp = [];
            count = 0;
        }
    }
    if (count > 0) {
        op.push(temp);
    }
    console.log("chunk of size " + size + " :", op);
    return op;
}
//reduce: calculate sum
arr = [1, 2, 3, 4, 5, 6];
reduce(arr);
function reduce(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    console.log("reduce: to sum", total);
    return total;
}
//filter:
arr = [12, 2, 3, 4, 5, 6, 7];
filter(arr);
function filter(arr) {
    var op = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0)
            op.push(arr[i]);
    }
    console.log("filter: find even numbers", op);
    return op;
}
//find:
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];
var found = find(users, 40);
console.log("find: get user whose age is less than 40", found);
function find(users, ageLimit) {
    for (var i = 0; i < users.length; i++) {
        var currObj = users[i];
        if (currObj['age'] < ageLimit)
            return currObj;
    }
}
//sum:
arr = [1, 3, 4, 5, 6, 90];
sum(arr);
function sum(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    console.log("sum of array:", total);
    return total;
}
