// javascript have prototype behaviou

/* almost everything in js is object*/

function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power); /*function is also an object so we can use dot notation */
// console.log(multiplyBy5.prototype); /*it will return an empty paranthesis */


const createUser = function(username,price){
      this.username = username;
      this.price= price;
}

/* creating our own prototype*/

createUser.prototype.increment= function(){
    this.price++;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`);
}

/* new keyword is used to tell us that new properties is being added like increment or printMe if we try to access properties with dot notation without using new keyword then it will show an undefined error */

const chai = new createUser('chai',25);
const tea = new createUser('tea',250);

chai.printMe();

/*new keyword functionality */
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/