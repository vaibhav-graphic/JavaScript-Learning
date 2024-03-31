const coding = ["java","swift","js","python","c++","c"]

coding.forEach( function (val) {
    // console.log(val);
});

coding.forEach( (val) => {
    // console.log( val );
} )

function printMe(val){
    console.log(val);
}

// important      give refference only
// coding.forEach(printMe)


coding.forEach( (item, index, value) => {
    // console.log(item,index,value);
})

const myArray = [
    {
        languageName : "javascript",
        languageFile : "js"
    },
    {
        languageName : "java",
        languageFile : "java"
    },
    {
        languageName : "python",
        languageFile : "py"
    }
]

myArray.forEach( (item) =>{
    console.log(item.languageFile);
} )