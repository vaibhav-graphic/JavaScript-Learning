function setUserName(userName){
    this.userName = userName;
}

function createUser(userName,email,password){
    setUserName.call(this,userName);
    // this keyword for hold the vlaue 
    // call function for 
    this.email = email
    this.password = password
}

const tom = new createUser("tom","tom@trex.com","qweda")
console.log(tom);