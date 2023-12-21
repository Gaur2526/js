const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc value is : ${acc} and currval : ${currval}`)
//      return acc + currval
// },0)

/* another method */

const myTotal = myNums.reduce((acc,curr) =>acc+curr,0)

// console.log(myTotal)

const shoppingCart = [
    {
        courseName: "cpp course",
        price : 5999
    },
    {
        courseName: "java course",
        price : 1999
    },
    {
        courseName: "js course",
        price : 3999
    },
    {
        courseName: "web dev course",
        price : 2999
    },
    
]

const totalPrice = shoppingCart.reduce((acc,item) =>acc + item.price, 0)

console.log(totalPrice)