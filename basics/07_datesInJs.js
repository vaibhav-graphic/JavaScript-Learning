console.log(`learning about date --->`)

let myDate = new Date();
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toString());
console.log(myDate.toTimeString);
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset());
console.log(typeof myDate);

console.log(`learning about creating a date --->`)
let myCreateDate = new Date(2023, 0, 5); // formate 1
// let myCreateDate = new Date(2023, 0, 5, 12 , 0); // formate 2 with time
// let myCreateDate = new Date("1-2-2020"); // formate 3
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor( Date.now() / 1000 ));


let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);// month are form 1 to 12 therffre use + 1;

newDate.toLocaleString('default',{  
    weekday: "long"
})
