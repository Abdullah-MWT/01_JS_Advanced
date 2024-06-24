// ***********************  NUMBERS  ***********************

// Usually we define numbers like , and it is detected by browser itslef that it,s a number
let score = 98;
console.log(score); 


// but what if we specifically want that it must be defined as a number, then we shall define it like this
let fiverrBalance = new Number(6458743*score);
console.log(fiverrBalance);


// Now, what if we wnat to keep any number upto some specific decimal point like .00 or .000 , then use 
console.log(fiverrBalance.toFixed(2));


// Now , if we want to be keep the whole  number precised to some limits, then use
let Balance  = 1132.7;
console.log(Balance.toPrecision(4));


// ******************* MATHS ********************
console.log(Math);
console.log(Math.abs(-6));   // "Used to change negative num into positive" // Absolute function  
console.log(Math.round(7.6));  // "Used for rounding-off a number"
console.log(Math.ceil(8.2));  // "Changes the num into the next one if it,s a bit more than whole like 8.2 to: 9"
console.log(Math.floor(8.2));  // "Keeps the number as same , means brings it to lower Like 8.2 to: 8"


console.log(Math.random()); // This math function guves us any number between 0 and 1 
console.log(Math.floor(Math.random()*100)+1);  // so now it,ll give us random number between 1 and 100








