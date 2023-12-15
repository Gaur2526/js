
function addTwoNumbers(number1 , number2){ /* (parameters)*/
    // let result = number1 + number2
    // return result;
    // console.log("akash") /* this will never executes bcz in js after return statement no commands will executed*/
    return number1 + number2
}
let ans = addTwoNumbers(3,7) /* (arguments) */
// console.log(ans)


function loginUserMessage(username = "unknown") { /* here : "unknown means if we are not passing any value to the parameter then default unknown value will takes place */
     if(!username){
        console.log("please enter the username")
        return
     }
     return `${username} just logged in`
}
// console.log(loginUserMessage("akash"))
// console.log(loginUserMessage())

/* ***************************************************** */

// sometimes we are in the situation where we don't know about the no. of arguments we are passing to the function so this case will handle with the rest operator ...  which bundles the arguments and return an array
/* rest and spread operator are same we will call it as rest or spread it depends upon the situtation */

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(20,30,40,50))

/* handling objects in the function*/

const user ={
     username: "Akash",
     price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`)
}

// handleObject(user)
/* another method */
handleObject({
    username : "Akash",
    price : "199"
})

// arrays in functions

const myArray = ["200","300","400","500"]

function getSecondElement(anyArray) {
    return anyArray[1]
}

// console.log(getSecondElement(myArray))
console.log(getSecondElement(["2000", "3000","4000","5000"]))