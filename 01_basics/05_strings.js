// string interpolation : we use backticks to enhance readability and adding more features on the go

const name = "akash"
const repoCount = 2

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

// console.log(typeof name)

const gameName = new String("akash-2526")
// console.log(typeof gameName)
// console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf("k"))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-10,6)
console.log(anotherString)

const newStringOne  = "     akash   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://akashgaur%202526"
console.log(url.replace('%20','-'))
console.log(url.includes("akki"))

const string = "akash-24-07-03"
console.log(string.split('-'))