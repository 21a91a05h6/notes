function f(a,b){
    console.log(arguments)// This will log all arguments passed to the function
    console.log(arguments[0]) // This will log the first argument passed to the function
    console.log(a)
}
//f('abc')
f('abc',1,2)// This will log 'abc' and ignore the extra arguments since they are not used in the function

// func('abc',1,2)
// let func=function(a,b){
//     console.log(a)
// }
// this will throw an error since func is not defined before it is called

func('adf',4,5)
function func(a,b){
    console.log(a)
}
// This will log 'adf' since the function is defined before it is called
// but it works like this in js, function declarations are hoisted to the top of their scope

console.log('a')
console.log('b')
console.log('c')
//breakpoints stop execution at the line where they are set, allowing you to inspect variables and the call stack at that point in time.