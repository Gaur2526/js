/* object literal : creating an object */
const user = {
    
    // properties
    username: "Akash",
    loginCount: 8,
    signedIn: true,
    
    // method
    getUserDetails: function(){
        //console.log('Got user details from the database')
        //console.log(`Username : ${this.username}`)
        console.log(this) /* current context */
    }
}

//console.log(user.username)
//console.log(user.getUserDetails())
//console.log(this) /* global context */

/*Constructor :- normally if we want to create another object so we have to type all the code so constructor provide us an type of method which can be used for every object  */


function User(username, loginCount, isLoggedIn){

    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    this.greeting = function(){
         console.log(`Welcome ${this.username}`)
    }
    return this;
}

const userOne = new User('akash',8,true);
const userTwo = new User('anuj',9,true);

/*if we are not using new keyword then userTwo will overwrite the userOne 
so we have to use new keyword to show that they are differnt */
console.log(userOne);
console.log(userTwo);