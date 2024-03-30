const user = {
    userName : "Gold D.Roger",
    bounty : 8999999999,
    welcomeMessage: function(){
        console.log(`${this.userName} , wellcome to the website`);
        console.log(this)
    }
}

user.welcomeMessage()
// user.userName = "D. Ace"
// user.welcomeMessage()
console.log();
console.log(this); // this show empty {} in node but in browser it will show multipul options

console.log(`_________________________________________________`);

// function pubg(){
//     username : "asur"
//     console.log(this.userName);
// }
// pubg();

const pubg = () => {
    username : "asur",
    console.log(this);
}

// pubg()

// const addTwo = (n1 , n2) => {
//     return n1 + n2
// } // way 1


// const addTwo = (n1 , n2) =>  n1 + n2 // way 2
// const addTwo = (n1 , n2) =>  (n1 + n2) // way 3

// all above most use in rect plz focus

const addTwo = (n1 , n2) => ( {userName : "naruto"} )// here is the correct way to use for object ()

console.log(addTwo(2,3))