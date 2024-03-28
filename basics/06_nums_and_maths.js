const score = 100;
console.log(score)//here js make it number it self

const score1 = new Number(100);
console.log(score1)// here we are makeing it a number 

console.log((score1.toString().length));
console.log(typeof score1);
console.log((score1.toFixed(2)));

const num1 = 123.333;
console.log(num1.toPrecision(2));// interview

const num2 = 1000000;
console.log(num2.toLocaleString());

// ++++++++++Maths+++++++++++

console.log(`math part srat here ----->`);
console.log();

console.log(Math);
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.abs(-4));

console.log(`here we learing about random method in java ---->`);
console.log(Math.random());
console.log( (Math.random() * 10) + 1 );  // same
console.log(Math.floor(Math.random()*10));// same

const min = 10;
const max = 20;

 console.log( Math.floor((Math.random() * (max - min + 1)) + min) );


