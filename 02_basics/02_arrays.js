const marvel_Heros = ['thor','iron-man','spider-man']
const dc_Heros =['superman','flash','batman']

const all_Heros = marvel_Heros.concat(dc_Heros);
// console.log(all_Heros);

/* another way to merge arrays using spread operator*/
/* spread syntax : ... */
/*Spread syntax can be used when all elements from an object or array need to be included in a new array or object */

const all_new_Heros = [...marvel_Heros,...dc_Heros]

// console.log(all_new_Heros)

const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_Array = another_Array.flat(Infinity)
// console.log(real_another_Array)

console.log(Array.isArray("Akash")) /*return boolean value whether the entered value is array or not */
console.log(Array.from("Akash")) /*from() will convert entered argument into the array */

console.log(Array.from({name : "Akash"})) /*it returns an empty array bcz we have to define whether we have to make key as an array or value as an array we will see it in next tutorial */

const score1=100;
const score2=200;
const score3=300;

console.log(Array.of(score1,score2,score3)) /*returns a new array from set of elements */
