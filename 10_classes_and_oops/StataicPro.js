class User{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`usernaem is ${this.userName}`);
    }

    static createId(){ // stop from access from every one
        return 'WWW'
    }
}

const jerry = new User("jerry");

// console.log(jerry.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const jeraya = new Teacher("jeraya", "jeraya@106.com")
console.log(iphone.createId());