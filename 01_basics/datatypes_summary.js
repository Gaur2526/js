// primitive - copy of the data is used
/* 
1.string
2.number
3.boolean
4.undefined
5.null
6.symbol
7.bigInt
*/

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol("123")
const anotherId = Symbol('123')
// console.log(id === anotherId)
const bigNumber = 2456345624365453n /* bigInt
n is used to represent that it is an bigInt not a number*/

// Reference (Non primitive)
/* 
1. Arrays
2. Objects
3. Functions
*/

/* all non primitive have object datatype*/
 const heros = ["Iron Man", "Hulk", "Dholu"]

 let myObj = {
      name : "akash",
      age : 20
 }

 const myFunction = function(){
   //  console.log("hello world");
 }

 myFunction();

//  console.log(typeof bigNumber)
//  console.log(typeof outsideTemp)

//  console.log(typeof myFunction) /* actual datatypes is object function */

//  ********************************************

// stack(primitive) heap(non-primitive)

/* stack provide the copy of the variable*/
let myYoutubeName = "akashgaurdotcom"

let anotherName = myYoutubeName
anotherName = "akki"
// console.log(myYoutubeName)
// console.log(anotherName)

/*heap provide reference to the variable */

let userOne = {
       email : "user@google.com",
       upi : "user@ybl"
}

let userTwo = userOne /* usertwo will get reference to the userone value bcz of heap as it is an non primitive datatype(obj)*/

// we can access obj value using dot operator
userTwo.email = "akash@google.com"

console.log(userOne.email) /*both the console statement get updated value */
console.log(userTwo.email)

