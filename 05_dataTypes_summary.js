// *************** SUMMARY OF DATATYPES  ***************
// There are mainly Two Datatypes : Primitirv & non-Primitive 

// Primitive Types:- 1. Number   2. Null  3. Boolean  4. BigInt  5. String   6. Undefined   7. Symbol

//Number
let Num = 123;
let anotherNum = 36.6;

//string
let str = "Abdullah";
let anotherStr = "Developer";

//Null
let emptyValue = null; 

//Boolean
var userLoggedIn = true;
var userNotLoggedIn = false;

//Undefined
let notDefined ;

//Bigint
var bigDigitn = 27657378727979687n;

//Symbol
var uniqueObject = Symbol('123');



// Non-Primirive:- 1. Arrays  2. Objects   3. Functions

//Arrays
let myFriends = ["Zaryab", "Sufyan", "Zulkiful", "Anees-ur-Rehman"];
let VariousFruits = ["Apple", "Orange", "Mango", "Banana", "Grapes"];
console.log(VariousFruits[1] , myFriends[0]);

//Objects
let myInfo = {
    Name: "Abdullah",
    RollNO: "118414",
    city: "Lakki Marwat",
    Hobby: "cricket"
}
  console.log("My Name Is ", myInfo["Name"], "and my Roll-no is", myInfo["RollNO"],".","I belong to", myInfo["city"]);

  //Functions
  function add(a, b) {
     return  a+b;
  }
//Now let,s invoke the function
let sum = add(6,8);
console.log("The sum is", sum);