// ************************** OPERATIONS-IN-JS *******************************

const { Output } = require("@mui/icons-material");

// some Basics Types Of Operations are "+" , "-" , "*" , "/" , "%"
let num1 = 12;
let num2 = 18;
let sum = num1+num2;
console.log(num1+num2);


// Some Advanced Usage of these Operations
// #1
let firstName = "Abdullah";
let lastName = " Developer";
let fullName = firstName + lastName;
console.log(fullName);

// #2
console.log(1 + 2);
// In this case the Output will be 12 , because the numbers are of different Nature, I-e num + str. So they will just be joined togather
console.log(1 + "2");
// Here as well the same as the above one but just opposite pattern
console.log("1" + 2);
// but in this output will be 122 bacause in the start there is string , so it,ll just join them all
console.log("1" + 2 + 2);
// but here output will be 32 ,  it,s because in the start there is number, so it,ll add the first 2 nums and then simply join the third string "2" to it
console.log(1 + 2 + "2");