// FOR OF LOOP

/*
for (const iterator of object) {
     here iterator means variable name and object means the variable on which we are trying to apply loop    
}
*/

const arr = [2,4,6,8,10]

for (const num of arr) {
    //console.log(num) /*it will provide you the value inside the array */
}

const greetings = "hello world"

for (const greet of greetings) {
    //console.log(`Each Char is ${greet}`) /*it will provide you the individual character along with space */
}

// MAPS

const map = new Map()

map.set("IN","INDIA")
map.set("USA","UNITED STATES OF AMERICA")
map.set("UK","UNITED KINGDOM")
map.set("IN","INDIA") /* duplicate entries are automatically removed */

for (const [key,value] of map) {
    console.log(key, ":-", value)
}

// for of loop on objects
/*object are not iterable by for of loop */

const object = {
    game1 : "NFS",
    game2: "GTA"
};

for (const key of object) {
   // console.log(key)
}