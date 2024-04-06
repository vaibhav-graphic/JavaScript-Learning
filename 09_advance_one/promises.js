const promiseOne = new Promise(function (resolve,reject){
    //
    // data featch, cryptography
    setTimeout(function(){
        console.log("Asyn task 1");
        resolve();
    },1000)
});

promiseOne.then(function (){
    console.log("asyn 1 promise completed");
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("asyn task 2");
        resolve()
    }, 1000);
}).then(function (){
    console.log("asny 2 Promises compledted");
});

console.log(`promice 3`);
console.log();

const promiseThree = new Promise(function (resolve,reject) {
    setTimeout(function(){
        resolve({user : "chai" , email : "iwin@examk.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})
const PromiseFour = new Promise( function(resolve,reject){
    setTimeout( function() {
        let error = false;

        if(!error){
            resolve({username : "sam" , password : "123"})
        }else{
            reject("Error : something went wrong")
        }
    }, 1000)
})

PromiseFour.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch( function(error){
    console.log(error);
})
.finally(() => {
    console.log("promis is resolve or rejected ");
})

const promiseFive = new Promise( function (resolve,reject){
    setTimeout(() => {
        let error = true;

        if(!error){
            resolve({username : "javaScript" , password : "123"})
        }else{
            reject("Error , js went wrong")
        }
    }, 1000);
} );

async function consumePromiseFive(){
    try {
        const responce = await promiseFive
        console.log(responce);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

