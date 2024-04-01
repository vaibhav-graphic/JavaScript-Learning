const coding = ["java","swift","js","python","c++","c"]


const values = coding.forEach( (item) => {
    // console.log(item);
} )
// console.log(values);

// see here if we want to see the 
// check a paticular values in Array
// for any purpose there for below example
// help to understand in number 

// --> for each in js do not return any thing

const myNums = [1,2,3,4,5,6,7,8,9,10]

const store =  myNums.filter( (num) => (num > 4) ) // here you will get arry

// console.log(store);

// important 

// when we do do not use (num > 4) insted of this 
// we use 
// myNums.filter( (num) => {
//     num > 4
// } )
// the output will be [] because {} is scope 
// and for this we have to use return keyword

// myNums.filtter( (nums) => {
//     return num > 4
// })

// here is another way for foreach 

const newArray = []

myNums.forEach( (num) => { // if we do not use filter we use forEach we logic
    if(num > 4){
        newArray.push(num);
    }
} )

// console.log(newArray);

