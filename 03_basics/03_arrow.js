/*this keyword refers the current context(value) */

const user = {
    username: "Akash",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website`)
        // console.log(this)
    }
    
}
// user.welcomeMessage()
// user.username="dholu"
// user.welcomeMessage()
// console.log(this) /*an empty object*/

function chaii(){
    const username = "Akash"
    // console.log(this.username) /* undefined bcz this. is not valid in functions it is used in objects*/
}
chaii()

/* *********************arrow function********************** */

// const addTwoNum = (num1, num2) =>{ /*if we are using curly braces then we have to use return keyword */
//       return num1+num2
// }

const addTwoNum = (num1,num2) => (num1+num2) /* implicit return method : doesn't require return keyword*/
console.log(addTwoNum(3,4))