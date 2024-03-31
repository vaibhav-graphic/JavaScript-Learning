const arr = [1,2,3,4,5]

for(const val of arr){
    // console.log(val);
}
const greeeting = "Hello world!"

for(const greet of greeeting){
    // console.log(greet);
}

const map = new Map(); // unique data only
map.set("IN","INDIA");
map.set("usa","United state of america");
map.set("fr","FRANCE");


// for(const key of map){
//     console.log(key);
// }

// for(const [ key ] of map){
//     console.log(key);
// }

//         destructure of thre array
for(const  [ key , value ] of map){
    console.log(key, ":-" , value);
}

