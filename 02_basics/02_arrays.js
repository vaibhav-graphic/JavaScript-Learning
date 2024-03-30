const marvelHero = ["ironman","deadpool","x-men"];
const dcHero = ["dr manhaten","superman","Batman"];


// console.log(marvelHero.push(dcHero)); wrong

const allHero1 = marvelHero.concat(dcHero); // way 1
console.log(allHero1);
const allHero2 = [...marvelHero,...dcHero]; // way 2 good way 
console.log(allHero2);

console.log()
const anotherArray = [1,2,3,4,[5,6,7],5,6,7,[2,3,5,[6,7,8]]];
const anotherArray1 = anotherArray.flat(2);// always give the number
console.log(anotherArray1)

console.log()
console.log(Array.isArray("luffy"))// is array or not array
console.log(Array.from("luffy"))//convert to the array
console.log(Array.from({name: "luffy"}))// [] empty --> always tell , to make array of key or value

console.log()

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));