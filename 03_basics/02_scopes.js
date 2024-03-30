var c = 3;

if(true){
    let a = 1;
    const b = 2;
    var c = 33333;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const userName = "roger";

    function two(){
        const website = "king of priate";
        console.log(userName);
    }
    // console.log(website);

    two();
}

// one();

console.log(addOne(5)); // hosting
function addOne(num){
    return num + 1;
}

// console.log(addTwo(6)) // error because it is contains in variable
const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(6))