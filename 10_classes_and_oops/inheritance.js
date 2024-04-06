class User{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`${this.userName} is username`); 
    }
}

class Teacher extends User{
    constructor(userName,email,password){
        super(userName)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`new Courec is add by ${this.userName}`);
    }
}

const jerry = new Teacher("jerry","jerry@rick","tomKiller")
jerry.addCourse();

const obito = new User("obito")
obito.logMe();

console.log(obito instanceof User);
console.log(jerry instanceof Teacher);
console.log(jerry instanceof User);
