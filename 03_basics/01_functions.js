
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

console.log(loginUserMessage("akash"))
console.log(loginUserMessage())