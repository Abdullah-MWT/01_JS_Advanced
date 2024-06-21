// ******************** STACK-&-HEAP MEMORY IN JS *********************

// 1. Stack memeory is used for storing Primirive Datatypes 

let myEmail = "user@gmail.com";
let hisEmail = myEmail;
console.log(hisEmail);
hisEmail = "me@gmail.com";

console.log(myEmail ,hisEmail);
// now here in stack memory, when we revalued hisEmail(myEmail), then we were given the copy of this and then changes were made i.e :- hisEmail("me@gmail.com") was replced on the place of hisEmail(myEmail) .


// 2. Heap memeory is used for storing non-Primirive Datatypes

let userOne = {
    Name: "Abdullah",
    Country: "Austrillia"
}


let userTwo = {
    Name: "Zaryab",
    Country: "Pakistan"
} 
console.log("Before");
console.log(userOne.Country,userTwo.Country);

userTwo.Country = "Canada";
console.log("After");
console.log(userOne.Country,userTwo.Country);

// Now we can see that when we changed the userTwo country to canada , so then it was changed & printed and here we were not give the copy of previous but the changes were made in the real value i.e:- Country: "Pakistan"