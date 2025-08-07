//higher order function takes a function as an argument
// or returns a function as a result
//it simplifies the syntax of the function 
let f=function(a,b){ return a+b; }
function g(f2){
    console.log(f2(10,11))
    //return 'Hello'
}
console.log(f(5,6)); // This will log 11 since f is a function
console.log(g(f))// we get undefined since no return value is given in g,

const arr1=['abc', 'def', 'ghi','jklmn'];
arr1.xyz=100
console.log('for in loop')
for (let v in arr1){
    //console.log(v);// This will log the index of each element in the array
    //this will print 'xyz' as well since it is a property of the array object
    //for in loops iterate over enumerable properties, including those added to the array object, general for loops do not include these properties.
    console.log(arr1[v]); // This will log the value of each element in the array
}
console.log('for of loop')
for (let v of arr1){
    console.log(v); // This will log the value of each element in the array, excluding properties like 'xyz'
}
console.log('for each loop')
arr1.forEach(function(v){console.log(v);}); // This will log the value of each element in the array, excluding properties like 'xyz'
// forEach does not iterate over properties like 'xyz' since it is not an array element

console.log('lambda function')
arr1.forEach((v)=>{console.log(v);}); // This will log the value of each element in the array, excluding properties like 'xyz'
// Lambda functions are a concise way to write functions, especially for array methods like forEach.
arr1.forEach(v => console.log(v)); // This will log the value of each element in the array, excluding properties like 'xyz'
let f3=(a,b)=>a+b; // This is a lambda function that takes two arguments and returns their sum
console.log(f3(5,6)); // This will log 11 since f3 is a lambda function

console.log(arr1.map(v =>v.length)) // This will log the length of each string in the array
console.log(arr1.map(v => v.length).filter(v => v > 3)) // This will log the lengths greater than 3


arr2=[10,11,12,13,14,21,22]
console.log(arr2.filter(v => v*v >150).reduce((a,b)=> {return a+b*b;},0)) // This will log the sum of the values that satisfy the condition v*v > 150
let ans=arr2.map(v=>v*v).filter(v => v > 150).reduce((a,b)=>a+b);
console.log(ans) // This will log the sum of squares of the values that satisfy the condition