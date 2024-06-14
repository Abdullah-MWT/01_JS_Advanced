// DataType Conversion Confusiom In Js
// Eample#1
let score = 33;
console.log("Before Conversion the type of value is:")
console.log(typeof score)
let valueInNumber = String(score)
console.log("After Conversion the type of value is:")
console.log(typeof valueInNumber);
console.log(valueInNumber)
// let valueInNumber = Number(score)


// Eample#2
let IsLoggedIn = 1;
console.log("Before Conversion the type of value is:");
console.log(typeof IsLoggedIn);
let BooleanIsLoggenIn = Boolean(IsLoggedIn);
console.log("After Conversion the type of value is:");
console.log(typeof BooleanIsLoggenIn);
console.log(BooleanIsLoggenIn)