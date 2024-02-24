// string interpolation : we use backticks to enhance readability and adding more features on the go

const name = "akash"
const repoCount = 2

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

// console.log(typeof name)

/* using new keyword is the another method of declaration of string */
const gameName = new String("akash-2526")
// console.log(typeof gameName)
// console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf("k"))

/* substring(indexstart , indexend)
    we can omit indexend by passing indexstart only 
    indexstart is included while indexend is not included in the new string */
const newString = gameName.substring(0,4)
console.log(newString)

/* slice(indexstart,indexend)
we can omit indexend 
indexstart is included in the new string while indexend is excluded
we can pass negative value also */
const anotherString = gameName.slice(-10,6)
console.log(anotherString)

const newStringOne  = "     akash   "
console.log(newStringOne)
/*trim will remove the whitespaces from both start and end side without changing the original string  */
console.log(newStringOne.trim())

const url = "https://akashgaur%202526"
console.log(url.replace('%20','-'))
console.log(url.includes("akki"))

const string = "akash-24-07-03"
console.log(string.split('-'))