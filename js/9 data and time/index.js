
//data obj basic 
const d = new Date();
console.log((d.toDateString()));
console.log(d.toString());
console.log(d.toISOString()); // ISO 8601 format (e.g., "2024-12-01T14:45:30.000Z")

console.log(d.getDate());
console.log(d.getDay());  // Day of the week (0-6, where 0 = Sunday)
console.log(d.getMonth());  // Month (0-11, where 0 = January)
console.log(d.getFullYear());
console.log(d.getMilliseconds()); // Milliseconds (0-999)

console.log(d.getMinutes());
console.log(d.getTime())  // Milliseconds since January 1, 1970

//Current timestamp in millisecond

const now = Date.now();
console.log(now);

//create a specific data
const d1 = new Date("2022-10-20");  // Specific date in "YYYY-MM-DD" format
console.log(d1.toString());

const date = new Date(2024,1,1,10,12,45,231);   // Year, Month (0-based), Day, Hour, Minute, Second, Millisecond
console.log(date.toString());

//modifying date using setters

const d2 = new Date();
d2.setDate(20);
d2.setFullYear(2024);
d2.setMonth(3);
console.log(d2.toLocaleString());

//calculating difference between two dates

// const date1 = new Date();
// const date2 = new Date("2025-04-21");


// Current date
const date1 = new Date();

// Target date: July 14, 2028
const olympicsDate = new Date("2028-07-14T00:00:00");

// Calculate the time difference
const timeDiff = olympicsDate - date1;

// Convert time difference into days, hours, minutes, and seconds
const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
const seconds = Math.floor((timeDiff / 1000) % 60);

// Display the countdown
console.log(`Olympics Countdown: Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);
