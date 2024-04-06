function mulBy5(num){
    return num * 5;
}

mulBy5.power = 2

console.log(mulBy5(5))
console.log(mulBy5.power)
console.log(mulBy5.prototype)

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const fly = new createUser("blue bird",50);
const swim = new createUser("any",222);

fly.printMe()
swim.printMe()
