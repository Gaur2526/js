/* FOR EACH LOOP : used mostly */

// forEach()  requires an call back function as an paramtere call back function means functions having no name 

 const myArray = ["akash","nikanshu","tushar"]

// myArray.forEach( function (val){
//       console.log(val); 
// })

// another way

myArray.forEach( (item,x,arr) => {
    // console.log(item,x,arr)
} )

// in forEach() if we are providing an function which is defined  outside the forEach() then we have to provide reference

// const hello = (value) => {
//     console.log(value)
// }

// myArray.forEach(hello)

/* ***********forEach loop on array of objects ************* */

const myCoding =[
    {
        languageName : "c++",
        languageFileName : "cpp"
    },

    {
        languageName : "java",
        languageFileName : "java"
    },

    {
        languageName : "javascipt",
        languageFileName : "js"
    }
]

myCoding.forEach( (item) => {
     console.log(item.languageName)
})
