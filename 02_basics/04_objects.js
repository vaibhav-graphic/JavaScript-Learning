// const nothingUser = new Object(); // this is a singlaton object 
const nothingUser = {}; // this is a non singalton object

// console.log(nothingUser);

const regularUser = {
    email : "luffy@amine",
    fullName :  {
        userFullName : {
            firstName : "Luffy",
            lastName : "Monkey D"
        } 
    }
}

// console.log(regularUser.fullName?.userFullName.lastName);
// ? use at the time of api call simple it is like a if else statemnt 

console.log(`merging of onject in javascript`);
console.log();

const obj1 = { a : "1", b : "2"};
const obj2 = { c : "3", d : "4"};
const obj3 = { e : "5", f : "6"};

// const obj4 = {obj1 , obj2};
// const obj4 = Object.assign({},obj1,obj2);

const obj4 = {...obj1,...obj2,...obj3}; // use in production 
console.log(obj4);

console.log();

// baseic hai data come from data base in array format

const user = [
    {
        id : "1",
        name : "luffy"
    },
    {
        id : "2",
        name : "chopper"
    },
    {
        id : "3",
        name : "brook"
    }
]

console.log(user);

console.log();

console.log(Object.keys(regularUser));
console.log(Object.values(regularUser));
console.log(Object.entries(regularUser));
console.log(regularUser.hasOwnProperty('emaildfghn'))


console.log();
console.log(`de structure of object in javaScripts`);
console.log();


const user2 = {
    cource : "haki",
    price : "will",
    courceInstructor : "shanks"
}

console.log(user2.cource);

// const {price} = user2; // this is also another way to destructure
const {price : p} = user2;
console.log(p);

console.log();
console.log();

console.log(`this done in rect js`);
console.log();

// this is a         |   destructure in object
//                  \ /
const  navbar = ( { company } ) => {

}
