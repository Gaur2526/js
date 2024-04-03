let myHero = ['thor','spiderman']

let heroPower = {

    thor: "hammer",
    spiderman: "sling"
} 

/*using Object we can use akash method on all type of objects either it is an array , stting , function and objects itself */
Object.prototype.akash = function(){

    console.log(`akash is present in all objects`);
}

/* heyakash method can be accessed by only Arrays not by object because object is type of parent of string array function  so any method which is defined on child cannot be accessed by parent while vice versa is true*/
Array.prototype.heyakash = function(){

    console.log(`akash says hello`)
}

// myHero.akash();
// myHero.heyakash();
// heroPower.heyakash(); /*it will provide an error because heyakash is not accessed by the objects */

/***************************************** Inheritance ***************************************** */


const User = {
    name : 'akash',
    email: 'akash@google.com',
}

const Teacher = {
    makeVideo : true,
}

const TeachingSupport = {
    isAvailable : false,
}

const TASupport = {
    makeAssignment : "Js assignment",
    fullTime : true,

    //__proto__ is used to inherit properties of another object it can be used within the object or outside the object
    __proto__ : TeachingSupport,
}

Teacher.__proto__ = User

// console.log(TASupport.isAvailable)
// console.log(Teacher.name)

/* modern syntax*/
/* first parameter will inherit the properties of the second parameter*/
//Object.setPrototypeOf(TeachingSupport,TASupport);
//console.log(TeachingSupport.makeAssignment); /*setPrototypeOf will create an cyclic prototype error because above in TASupport we are inheriting properties of TeachingSupport and on line 64 vice versa so do it carefully */



/**************************************************************************************************/

let userName = "akash     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length of string is : ${this.trim().length}`);
}

userName.trueLength();
"akash".trueLength();
"akash               ".trueLength();