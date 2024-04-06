// class User{
//     constructor(userName,email,password){
//         this.userName = userName;
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}jjj`
//     }

//     changeUserName(){
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const madara = new User("madara","uch@god.com","harshi")
// console.log(madara.encryptPassword());
// console.log(madara.changeUserName());

// behind the scene

function User(userName,email,password){
    this.userName = userName
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
        return `${this.password}jjj`
}

User.prototype.changeUserName = function(){
    return `${this.userName.toUpperCase()}`
}

const eren = new User("eren","eren@noob","week");
console.log(eren.encryptPassword());
console.log(eren.changeUserName());
