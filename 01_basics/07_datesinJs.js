// dates

/* months in js starts from 0 means 0 == jan*/
/* time is in milliseconds*/

const myDate = new Date();

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// const myCreatedDate = new Date(2003,6,24);
// console.log(myCreatedDate.toDateString());
// const newCreatedDate = new Date(2003,11,24);
// console.log(newCreatedDate.toDateString());

const newDate = new Date("04-27-2021");
// console.log(newDate.toLocaleString())

let myTimeStamp =Date.now()

// console.log(myTimeStamp) /* return value in milliseconds*/
// console.log(newDate.getTime())

/* conversion to seconds*/

// console.log(Math.floor(Date.now()/1000));

const new_Date = new Date();

console.log(new_Date.getDay())
console.log(new_Date.getMonth())
console.log(new_Date.getDate())
