// if

// const temperatur = 41

// if(temperatur < 50){
//     console.log("less than 50")
    
// }
// else{
//     console.log("temperature is greater than 50")
// }

// console.log("executed")


const score = 200

if(score > 100){
    const power = "fly"
    // console.log(`power is : ${power}`)
}

// console.log(`power is : ${power}`)

const balance = 1000;

if(balance < 500){
    console.log("balance is less than 500");
}
else if(balance < 750){
    console.log("balance is less than 750");
}
else if(balance < 900){
    console.log("balance is less than 900");
}
else{
    // console.log("balance is less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
const userLoggedInFromgoogle = false;
const userLoggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy Course");
}

if(userLoggedInFromEmail || userLoggedInFromgoogle){
    console.log("User logged in")
}