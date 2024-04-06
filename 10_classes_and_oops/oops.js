const user = {
    username : "qwerty",
    loginCount : 8,
    singIn : true,

    getDetails : function() { 
        // console.log(`user name is ${this.username}`);
        console.log(this);
    }
}

const user2 = {
    username : "qwerty_01",
    loginCount : 8,
    singIn : true,

    getDetails : function() { 
        // console.log(`user name is ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getDetails());
// console.log(this);

function User(username, loginCount, singIn) {
    this.username = username
    this.loginCount = loginCount
    this.singIn = singIn

    // return this
}


// const userOne = User("ggggg",11,false);
// const usertwo = User("kkkkk",91,true);
// console.log(userOne); // overridding thereforeew use new Keyword

const userOne = new User("ggggg",11,false);
const usertwo = new User("kkkkk",91,true);
console.log(userOne); 
console.log(usertwo); 

// you may not use return this keyword beacuse it implectily return or define 
