 function sayMyName(){
    console.log("j");
    console.log("o");
    console.log("k");
    console.log("e");
    console.log("r");
 }

//  sayMyName();


//  function addTwoNum(number1 , number2){
//    console.log(number1 + number2);
//  }

 function addTwoNum(number1 , number2){
   let res = number1 + number2;
   return res;
 }

 const result = addTwoNum(10,10);

//  console.log(result);

 console.log();
 console.log();

 function logIn(userName){
   if(userName === undefined){
      return;
   }
   return `${userName} is loged in`;
 }

 console.log( logIn() );

console.log();
console.log();

function calTheNumber(val1, val2, ...num1){
   return num1;
}

console.log( calTheNumber(1,2,3,44,666) );

console.log();
console.log();

const user = {
   userName : "luffy",
   price : 122
}

function handleObject(anyobject){
   console.log(`name of the use is ${anyobject.userName} and price is ${anyobject.price}`);
} 

// handleObject(user);
handleObject({
   userName : "tom",
   price : 55
})

console.log(`arry pass throug function`);

const newArray = [1,2,3,4,5]

function printArray(getArray){
   return getArray[2];
}

// console.log( printArray(newArray) );
console.log( printArray( [1,2,3,4,4] ) );

