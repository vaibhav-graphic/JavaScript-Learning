const userEmail = "wedfvgbnm,"

if (userEmail) {
    console.log("got the email");
} else {
    console.log("dont get the email");
}
//falsey value
// false, 0, -0, BigInt 0n , "", undefined, null, NaN

//truthy value
// "0", "false", " ", [], {}, function(){} empty function , empty array

// how to check empty array and empty object

// if(userEmail.length === 0){
//     console.log("empty array");
// }

// if(Object.keys().length === 0){
//     console.log("empty object");
// }

// console try kar bhai

//          output
false == 0  // true
false == '' // true
0 == ''     // true

// Nullish Coalescing operator (??) : null undefined

let val1;

// val1 = 5 ?? 19
val1 = null ?? 19 // output 19
val1 = undefined ?? 62 // output 62
val1 = null ?? 10 ?? 11 // output 10 

// Nullish Coalescing operator different from terery operator


// if we get the null 
// from data base so we give another value 
// to achiev safety

console.log(val1);