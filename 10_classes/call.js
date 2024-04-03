function setUserName (username){
    this.username = username;
    console.log('called');
}

function createUser(username,email,password){

    setUserName.call(this,username); /* .call will hold the reference means the functionality of setusername will be saved  and we pass this as an arugument to do so now after using .call we will get the full object*/
    this.email = email;
    this.password = password;
}

const chai = new createUser('chai','chai@google.com','234')
console.log(chai);