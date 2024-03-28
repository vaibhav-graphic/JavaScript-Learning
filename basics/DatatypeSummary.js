// premitive datatype 
 // 7 type 

//  String 
//  Number
//  undefined
//  null
//  Boolean
// BigInt
// Symbol

const score = 100;
const scoreVal = 100.3; // not treat as float all are treated as number

const isLoggedIn = false;
const outSideTemp = null;

let useEmail; // undefine

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigInt = 323432546743433213n;

// non premitive type 

// arrays object function

const hero = ["luffy","zoro","chopper"]; // arrys

let myObj = {
    name : "luffy",
    age : 1,
}

const myFunction = function(){
    // console.log("hello world");
}

// to check the datatype in js

// console.log(typeof useEmail);
// console.log(typeof anotherId);
// console.log(typeof bigInt);
// console.log(typeof outSideTemp); // emca scrpit null trate as object 
// and non premetive also treated as functuon object

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// ++++++++++++++++++++++++++++++++++++++++++++
// stack (premitive) heap (non premitive)
// copy                    reference

console.log( "stack (premitive) heap (non premitive) -- >  variable" )

let myName = "naruto";
let myName2 = myName;

myName2 = "itachi";
console.log(myName);
console.log(myName2);

console.log( "stack (premitive) heap (non premitive) -- >  Objects" )
let myUser = {
    name : "yt@google.com",
    pass : "7777777"
}

let myUser2 = myUser;
myUser2.pass = "55555555"; // change in heap 
console.log(myUser);
console.log(myUser2);
