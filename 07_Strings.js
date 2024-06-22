const myName1 = "Abdullah"; // This si simple String

// Two Types of Syntaxes used for string concatenation

// 1. Older and not recommended one syntax

let myName = "Abdullah";
let myCountry = "Paksitan";

console.log("MY Name is ", myName, "and i am from ", myCountry);

// 2. Modern and mostly recommended one syntax
let myFriend = "Zaryab";
let hisCountry = "Paksitan";

console.log(`My Friend name is ${myFriend} and he is from ${hisCountry}`);

// Some important String methods 

// 1:-     .length  "Used to know the lenght of a String" 
let para = "Hello, My Name Is Abdullah and i belong to Lakki Marawat"
console.log(para.length);



// 2:-    .at ||  charAt  ||  charCodeAt  They all work for finding the position of specific Character
let hello = "HELLO WORLD"
console.log(hello.at(3));
// NOTE:- It allows the use of negative indexes while charAt() do not.
//Now you can use myString.at(-2) instead of charAt(myString.length-2)




// 3:-  .slice(start, end)  ||  .substring(start, end)  || .substr(start, length)  "used to cut the part of a string"
let myFruits = "Banana, Apple, Mango";
console.log(`The Second Fruit here is ${myFruits.slice(8, 13)}`); // Here 8,13 means from 8th to 13 but always 13th is excluded



//4:-   .toUpperCase  ||  .toLowerCase   "used to change all the characters from lower to upper and vice versa"
let mySentence = "Hello, My Name Is Abdullah and i belong to Lakki Marawat";
console.log(mySentence.toLocaleUpperCase());


//5:-  .concat  "Used to join two or more strings just like the plus+ operator"
let txt1 = "Welcome";
let txt2 = "Abdullah";
let cancat = `${txt1.concat(" ", txt2)}`;
console.log(cancat);


//6:- 
