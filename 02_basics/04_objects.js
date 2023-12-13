// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "mango"
tinderUser.isLoggedIn = false
// console.log(tinderUser)
 
/*nesting of objects */

const regualarUser = {
      email : "akash@google.com",
      fullName : {
             UserName : {
                FirstName : "Akash",
                LastName : "Gaur"
             }
      } 
}

//console.log(regualarUser.fullName.UserName.FirstName)

// merging objects

const Obj1 = {1 : "a",2 : "b"}
const Obj2 = {3 : "c",4 : "d"}
const Obj3 = {5 : "e",6 : "f" }

// const obj4 = Object.assign({}, obj1,obj2,obj3)
/*most used method is using spread operator */
const obj4 = {...Obj1,...Obj2,...Obj3}
// console.log(obj4)

/* **************************************************** */

// when we fetch data from API it sends it as an array of objects

const users = [
    {
        email: "akash@google.com",
        isLoggedIn : false
    },
    {

    },
    {

    }
]

console.log(users[0].email)

console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty("isLoggedIn"))