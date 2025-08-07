let o={
    a:'Hi'
}
o.b='Hello'
o.ji='World'
o[1]='Leaf'
//o.b='Hey'// this will overwrite the previous value
//console.log(o.a)
console.log(o.b)
let p='b'
console.log(o[p])
console.log(o['j'+'i'])
console.log(o[1])

l=[1,2,3]
l[300]='abc'
console.log(typeof l) // Array is an object in JavaScript
console.log(l[0])
console.log(l[300])
console.log(l[299]) // Undefined since no value is assigned at index 299
console.log(l.length) // Length is 301 due to the sparse array
//A sparse array is an array in which most of the elements are zero or have the same default value (such as null). This type of array is particularly useful when dealing with large datasets where the majority of the elements are not significant, as it helps in saving memory and reducing computation time.

let m=l
m[0]=700
console.log(m[0])
console.log(l[0])// Both will log 700 since m is a reference to l

