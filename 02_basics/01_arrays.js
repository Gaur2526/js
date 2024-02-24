// arrays

const myArray = [1,2,3,4,5];
const myHeros = ["iron-man","thor","superman"]
/* another method of array declaration */
const array = new Array(1,2,3,4);
console.log(array) 
// console.log(myArray[0]);
// console.log(myHeros.length);

// arrays method

myArray.push(6)
myArray.push(7)
myArray.pop();
// console.log(myArray);

myArray.unshift(0); /*add 0 to the first position in array */
myArray.shift(); /*remove the first element of the array */
// console.log(myArray)

// console.log(myArray.includes(9))
// console.log(myArray.indexOf(3));

const newArray = myArray.join() /*convert array into string */

// console.log(newArray)
// console.log(typeof newArray)

// slice, splice

const myn1 = myArray.slice(1,3); /* these 1,3 are indexes of array */
console.log("A ",myArray);
console.log(myn1);

console.log("B ",myArray);

const myn2 = myArray.splice(1,3); /* splice includes both indexes and also remove the indexes and update the array by removing the elements of the range given*/
console.log("C ",myArray);
console.log(myn2);
