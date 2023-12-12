const score =100;
const balance = new Number(200);

// console.log(balance)
// console.log(score)
// console.log(balance.toString())
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 232.187
// console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')) /*convert 0's into readable form en-IN means it have to follow indian number representation otherwise default is Us based */


// ****************Maths***************************************

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.min(4,3,5,8))
// console.log(Math.max(4,3,5,8))

// console.log(Math.random())
// console.log(Math.random()*10)
// console.log(Math.floor(Math.random() * 10) + 1)

const min = 10;
const max = 20;

// we have to print no.'s between 10 and 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
