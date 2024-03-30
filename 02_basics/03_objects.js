console.log(`learing about object liternals ----> `)

const mySym = Symbol("key1");
const user = {
    name : "luffy",
    "full name" : "monkey D.Luffy",
    [mySym] : "marien",
    age : 23,
    email : "luffy@pie.com",
    logedIn : false,
    lastLogIn : ["mon","tue","wed","thru","fri","sat"]
}

console.log(user.name);
console.log(user["full name"]);
console.log(user.mySym);

user.email = "luffy@kai.com";
// Object.freeze(user);
user.email = "luffy@boa.com";
console.log(user);

user.greeting = function(){
    console.log("hello amgio");
} 

user.greeting2 = function(){
    console.log(`hello amgio ${this.name}`);
} 
console.log()
console.log(user.greeting());
console.log(user.greeting2())