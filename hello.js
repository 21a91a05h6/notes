// console.log('Hello, World!');

// let a=5;
// let b='hello';
// let c=true;
// let d=null;
// let e=undefined;
// let f={name: 'John', age: 30};
// let g=[1, 2, 3, 4, 5];
// let h=function() { return 'I am a function'; };
// let i=Symbol('unique');
// let j=BigInt(12345678901234567890);
// let k=NaN;
// let l=Infinity;
// let m= -Infinity;
// let n=()=> 'Arrow function';
// console.log(a, b, c, d, e, f, g, h(), i, j, k, l, m, n());
// console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g, typeof h, typeof i, typeof j, typeof k, typeof l, typeof m, typeof n);
// let s=function(a,b){return a+b}
// console.log(s('hello',5)); //console.log(s(5,'hello));

// 'use strict';
// function o(){
//     df=10;
// }
// o();
// console.log(df); // This will throw an error if 'use strict' is enabled, otherwise it will log 10

function kl(a,b){
    //console.log(a || b)
    console.log(`The value is ${a || b}`) // after bitwise OR operation we get 5 which is truthy or just takes the first truthy value;
}
//kl(false,true)
kl(0,6)// takes the second value since the first is falsy but you can just do the bitwise at this point.
//kl(5,6) // takes the first value since it is truthy
//kl(function(z){}, 6) // takes the first value since it is truthy