/* promises :- two parts 
   
    1. creation of promises
    2. consumption of the promises
*/

// creation
 
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
          console.log("Async task is complete");
          resolve(); /* used to relate resolve with .then() we can also pass values in resolve*/
    },1000)
})

/* promise contains an call back function as an parameter , and the call back function also contains two parameters one is resolve and other one is reject*/

// consumption

/* .then() have an direct relation with the resolve , .then() contains an call back function which recieves an return value from the setTimeout function*/
promiseOne.then(function(){
    console.log("promise consumed");
})

/* another syntax */

new Promise(function(resolve,reject){

    setTimeout(function(){
         console.log("Async task 2");
         resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){

    setTimeout(function(){
       resolve({username : 'akash', email: "akash@example.com"}) /* resolve also contains data mostly objects you can pass array or string also etc*/
       /*the object in the resolve wil automatically pass as an paramter to the call back function of the .then() let's say user*/
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    
    setTimeout(function(){
           let error = true;

           if(!error){
            resolve({username : "akash", password : "123"});
           }
           else{
               reject("ERROR : Something went wrong");
           }
    },1000)
})

promiseFour
.then( (user) => {
        console.log(user);
        return user.username; /* this return statement will pass the value to the next .then() this concept is called chaining and it is very usefull in DB connections */
})
.then( (username) => {
      console.log(username);
})
.catch(function(error) {
      console.log(error);
}) /* .catch() relates with the reject of our promise , it contains an call back function which accepts data from reject() */
.finally( () => {
    console.log('The promise is either resolved or rejected')
}) /* .finally() is an kind of default statement which is executed always either the promise is resolved or rejected*/

const promiseFive = new Promise(function(resolve,reject){
       
    setTimeout(function(){
              let error= true;
              if(!error){
                  resolve({username:"javascript", password:"123"});
              }
              else{
                  reject('ERROR: js went wrong')
              }
    },1000)
})


/* another syntax to consume promise in place of .then() & .catch() */

async function consumepromiseFive(){
    try{
            const response = await promiseFive
            console.log(response)
    }
    catch (error){
          console.log(error);
    }
}

consumepromiseFive();


// async function getalluser() {
       
//     try {
         
//       const response =  await fetch("https://jsonplaceholder.typicode.com/users")
      
//       const data = await response.json()
//       console.log(data);

//     } catch (error) {
//          console.log('E: ',error);
//     }
// }

// getalluser()

/* fetching data from the API using .then() & .catch() instead of async await */

fetch("https://jsonplaceholder.typicode.com/users")
.then( (response) => {
      return response.json()
})
.then( (data) => {
        console.log(data);
})
.catch( (error) => {
       console.log(error)
})