console.log("Hi");
let todayDate = new Date();
console.log(todayDate);
console.log(new Date("2024-06-26").toString());
console.log(new Date(2024,6,26,6,28,45,56).toDateString());


let year = todayDate.getFullYear(); //  TO get just the current year separatly
console.log("year:" , year);


let month = todayDate.getMonth(); // To get just the current month separatly
console.log("Month:", month + 1);


let day = todayDate.getDate(); // To get just the current month separatly
console.log("Day:", day);

let dayName = (todayDate.getDay()).toLocaleString(); // To get just the current month separatly
console.log("DayName:", dayName);

// Get hour (0-23)
let hours = todayDate.getHours();
console.log('Hours:', hours);

// Get minute (0-59)
let minutes = todayDate.getMinutes();
console.log('Minutes:', minutes);

// Get second (0-59)
let seconds = todayDate.getSeconds();
console.log('Seconds:', seconds);

// Get millisecond (0-999)
let milliseconds = todayDate.getMilliseconds();
console.log('Milliseconds:', milliseconds);

// Get time (milliseconds since January 1, 1970)
let time = todayDate.getTime();
console.log('Time in milliseconds since January 1, 1970:', time);



 todayDate.toLocaleString('default', {
    weekday: "long",
    month: "2-digit"
 })


