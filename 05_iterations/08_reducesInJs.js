const myNums = [1,2,3]

// const newArray = myNums.reduce( function (acc,currVal) {
//     console.log(`acc is ${acc} ans currVal is ${currVal}`);
//     return acc + currVal
// }, 0)

const newArray = myNums.reduce( (acc,currVal) => (acc+currVal),0 )
// console.log(newArray);

const shoppingCart = [
    {
        itemName : "js cource",
        price : 2999
    },
    {
        itemName : "py cource",
        price : 4999
    },
    {
        itemName : "java cource",
        price : 4999
    },
    {
        itemName : "mobile cource",
        price : 8999
    }
]

const answer = shoppingCart.reduce( (acc,item) => (acc + item.price) , 0 )

console.log(answer);