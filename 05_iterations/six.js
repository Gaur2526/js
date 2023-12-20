// filter : which returns the value of the array, return means stroring the value in an variable
/* syntax  .filter( (call back function) => condition  )*/

const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter((num) => num > 4 )
/* another way */

// const newNums = myNums.filter( (num) =>{
//          //return num>4 /* we have to apply return in case of curly braces*/
// })

// console.log(newNums)

/* using FOR EACH loop */

// const newNums = []

// myNums.forEach( (num) => {
//       if(num > 4){
//         newNums.push(num)
//       }
// } )

// console.log(newNums)

const books = [
    {title : 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title : 'Book two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title : 'Book three', genre: 'History', publish: 1999, edition: 2007},
    {title : 'Book four', genre: 'Non-Fiction', publish: 2009, edition: 2014},
    {title : 'Book five', genre: 'Science', publish: 1987, edition: 2010},
    {title : 'Book six', genre: 'Fiction', publish: 1986, edition: 1996},
    {title : 'Book seven', genre: 'History', publish: 2011, edition: 2016},
    {title : 'Book eight', genre: 'Science', publish: 1981, edition: 1989},
    {title : 'Book One', genre: 'Fiction', publish: 1981, edition: 1989}
]

let userBooks = books.filter( (bk) => bk.genre === 'History')
    
userBooks = books.filter( (bk) => {
    return bk.publish >=1995 && bk.genre ==='History'
})
console.log(userBooks)