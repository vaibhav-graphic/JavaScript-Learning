const myObject = {
    js : "javascript",
    cpp : "c++",
    java: "java",
    py: "python"
}

// for(const obj in myObject){
//     console.log(obj);
// }

for(const obj in myObject){
    // console.log(`${obj} shortcut is use for the ${myObject[obj]}`);
}

const programming = ["java", "js", "python","rust"]
for(const key in programming){ // key
    // console.log(key);
}

// for(const key in programming){ // value
//     console.log(programming[key]);
// }
// when we use of loop in js for array 
// it give value but when we use in loop 
// for the arry in js the it will give indexs

const map = new Map(); // unique data only
map.set("IN","INDIA");
map.set("usa","United state of america");
map.set("fr","FRANCE");

// iterrator are not use 
// in the map
for (const key in map) { // not work in map
    console.log(key);
}
