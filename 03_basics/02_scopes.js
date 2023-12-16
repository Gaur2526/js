// we have 3 keywords to declare a variable in js
/* 1.let , 2.const , 3.var  
we are not using var bcz it can be accessed outside the local scope and can be redeclared 
types of scope : global , block
values in global scope can be accessed in block scope but vice versa is not true*/

var c=300;
if(true){
    // let a = 10;
    // const b = 100;
    c = 30; /* re declaration of variable c bcz of var*/
}
// console.log(a); /* this will print that a is not declared*/
// console.log(b); /* this will print that b is not declared*/
// console.log(c); /*this will print the value of c bcz of var keyword */

/* *************************************************** */

function one(){
    const username = "Akash"

    function two(){
        const email ="akash@google.com"
        // console.log(username);
    }

    // console.log(email); /* here two is considered as local scope and one is considered as global scope for the two so we cannot fetch value from the local scope to the global scope*/

    two()
}

one()

if(true){
    const username="Akash"

    if(username){
        const website = " Youtube"
        // console.log(username + website)

    }
    // console.log(website) /* cannot be accesed bcz of scope*/
}
// console.log(username) /* cannot be accesed bcz of scope*/

/* *************** Hositing ****************************** */
/* JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.
*/

addOne(5)
function addOne(num){
     return num + 1
}


// addTwo(6) /* this is hoisting where we call the variable before the initialization*/
const addTwo = function(num){
    return num + 2;
}
