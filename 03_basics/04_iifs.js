// Immediately invoked function expression (iife)

// iifs is use when we want to stop global to pollute my function
// Immediately call my function


// there on e problem your are put ; in last of iife
(function chai(){
    console.log(`DB CONECTTED`);
})();

(function aurCode(){
    // name iife
    console.log(`DB CONECTTED TWO`);
})();

// for arrow function
( (name) =>{
    // unnmae iife
    console.log(`DB CONNECTION ${name}`);
} )('Ace');