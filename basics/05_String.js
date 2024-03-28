const name = "luffy";
const repoCount = 50;

console.log("concate a string in js ---> not recommonded");
console.log(name + repoCount + " value");

console.log();

console.log("use string interpollation backtics ---> morder way");
console.log(`my name is ${name} and my repo count is ${repoCount}`);

console.log();

console.log("another way to make a string in js use new key word it will give in key value pair -->");
const gameName = new String("luffy");

console.log(gameName.charAt(1));
console.log(gameName.indexOf('f'));
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName)

console.log("substring , slice , trim , replace, include method -->");
const newString = gameName.substring(0,4);//no negative value 
console.log(newString);

const newString1 = gameName.slice(-8,4);//reverse print 
console.log(newString1);

const newString2 = new String("     luffy   ");
console.log(newString2);
console.log(newString2.trim());

const url = "https://luffy.com/luffy%20monkey";
console.log( url.replace('%20','-') );
console.log( (url.includes('luffy')) );
console.log( (url.includes('ttttt')) );

const newString3 = new String("monkey-luffy-d");
console.log( newString3.split('-') );