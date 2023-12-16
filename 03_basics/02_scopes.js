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
console.log(a); /* this will print that a is not declared*/
console.log(b); /* this will print that b is not declared*/
console.log(c); /*this will print the value of c bcz of var keyword */