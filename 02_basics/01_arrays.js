console.log(`learning about the array in javaScript --->`)

const arr = [1,2,3,4,5];
const myArr = new Array(6,7,8,9,10);
const myArr2 = ["luffy","robin"];

console.log(myArr2[0]);
console.log();
// arrays method 
console.log(`learning about the array method in javaScript --->`);

// arr.push(6);
// arr.push(7);
// arr.pop();

// arr.unshift(0);
// arr.shift();

console.log(arr.includes(6));
console.log(arr.indexOf(4));
console.log(arr);
console.log();

const newArr2 = arr.join();
console.log(arr);
console.log(newArr2);
console.log(typeof newArr2);

console.log();

console.log(`slice and splice  ----->`);

const arry = new Array(1,2,3,4,5,6,7,8);
const arry1 = arry.slice(4,7);

console.log("before slice " + arry);
console.log(arry1);
console.log("after slice " + arry);

const arry2 = arry.splice(4,7);

console.log("before splice " + arry);
console.log(arry2);
console.log("after splice " + arry);
