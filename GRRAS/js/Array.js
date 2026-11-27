// // array method : 

// /// array used and follow indexing concert (0)
// const xyz  = ["Hello", 123, 34545, "good evening"]
// console.log(xyz)

// let abc  = xyz.length
// console.log(abc)

// const xxx = ["Hello", 123, 34545, "good evening"]
// const yyy = xxx.toString();

// console.log(yyy)

// const zzz = ["Hello", 123, 34545, "good evening"]
// const aaa = zzz.at(2)

// console.log(aaa);

// // push : adds elemeent from the end of array 
// const hello = ["Hello", 123, 34545, "good evening"]
// hello.push("good", 3435)

// console.log(hello)

// // pop : removing elements from the array 
// const hey =["Hello", 123, 34545, "good evening"]
// hey.pop()

// // shift : removing the element from the starting of the array 
// const pqr = ["Hello", 123, 34545, "good evening"]
// pqr.shift();

// // unshift : adds elements from the starting 
// const ppp = ["Hello", 123, 34545, "good evening"]
// ppp.unshift("good", 3434)

// console.log(ppp)

// // concat :  joining multiple array and display a new array e
// const boys = ["tarun", "amit"]
// const girls = ["diya"]
// const others = ["apple", "orange"]

// const gender = girls.concat(boys, others)
// console.log(gender);
// console.log(pqr);

// javascript Object Notation (JSON Format)
// [{
//     "id" :1,
//     "name": "hello"
// }, 

// {
//     "id" :1,
//     "name": "hello"
// },

// {
//     "id" :1,
//     "name": "hello"
// }
// ]

// REGEX : regular Expression 
// REGEX use form validation and data validation 

// 1. username, email address, contact Number, password, id, etc...aaa

// username : string 
// email address : string (numerics, alphabetics, special Character), required
// contact number : numeric value (BigInt) // 10 - digits
// password : password (encrypted format) - ..., required
// [A-Z] [a-z] [0-9] []


const fruits = ["apple", "graps", "berry", "banana", "orange"]
const veg = fruits.splice( 2,3, "kiwi", "pineapple", "coconut")

console.log(veg)
console.log(fruits)
