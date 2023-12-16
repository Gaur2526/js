// Immediately Invoked Function Expression(IIFE)
/*iife is used to remove the pollution produced by the global scope means something about time delay
An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.  */

//()() /*first block is funciton definition and second one is execution call */

(function chai(){
    // named iife bcz it has an name
    console.log(`DB Connected`)
})(); /* we have to use semicolon here*/

((name) => {
   console.log(`DB Connected two ${name}`)
})("Akash");