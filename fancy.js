let arr1=[5,6,7]
let [a,b]=arr1 
// This will destructure the first two elements of the array into variables a and b
console.log(a,b) // This will log 5 and 6, destructuring the first two elements of the array

let o={
    x:100,
    y:200
}
let {x}=o
// This will destructure the property x from the object o into the variable x
console.log(x) // This will log 100, destructuring the property x from the object

function f(a,b,c){
    console.log(a,b,c)
}
//f(arr1)//this will give 5 6 7 undefined undefined since only a is given and not b and c
f(...arr1)// This will spread the elements of arr1 into the function f, logging 5, 6, and 7

function g(...args){
    console.log(args)
}
g(1,2,3,4,5) // This will log an array of all arguments passed to the function g
g(true,'hello',5) // This will log an array of all arguments passed to the function g, including different types

let arr2=[1,2,3]
let arr3=[4,5,6]
console.log([...arr2,...arr3]) // This will log a new array combining arr2 and arr3, resulting in [1, 2, 3, 4, 5, 6]
let o2={
    z:400
}
console.log({...o,...o2}) // This will log a new object combining properties from o and o2, resulting in { x: 100, y: 200, z: 400 }