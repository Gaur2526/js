// object literals method to declare an object

const mySym = Symbol("key1")
const jsUser = {

    name : "Akash",
    "full name" : "Akash Gaur",
    // mySym : "myKey1", /* here mySym will be of string type*/
    [mySym] : "myKey1",
    age  : 20,
    location : "Greater Noida",
    email : "akash@google.com",
    isLoggedIn : "false",
    lastLoginDays : ["wednesday","thursday"]
}

/* two ways to access an object value*/

/*if the key is not in the form of strings ,
as js will consider key as an string behind the scene */
// console.log(jsUser.email)

/*if the key is in string form */
// console.log(jsUser["email"])
// console.log(jsUser["full name"]) /* full name can only be accessed by this method bcz key is in string form */

// console.log(jsUser[mySym]) 

/* updating the objects value*/
jsUser.email = "akash@microsoft.com"

// we can freeze our object so that no changes can be applied

// Object.freeze(jsUser)
// jsUser.email = "akash@chatgpt.com"
// jsUser.isLoggedIn = "true"

console.log(jsUser)

jsUser.greeting = function() {
    console.log("Hello Js User")
}

jsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`)
}
jsUser.greeting()
jsUser.greetingTwo()