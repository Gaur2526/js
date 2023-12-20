// MAP
const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map((num) => num+10)

// console.log(newNums)
const newArray = []
 myNums.forEach( (num) => {
      newArray.push(num + 10) 
})

// console.log(newArray)

/* *********************chaining************************** */
//chaining refers to the technique of having more than one method appiled on a single variable

const newNums= myNums
.map( (num) => num*10)
.map( (num) => num + 1)
.filter( (num) => num >=40)
console.log(newNums) 