// FOR IN LOOP

const myobject = {
    js : "javascript",
    cpp : "c++",
    rb: "ruby",
    swift : "swift by apple"
};

for (const x in myobject) {
    //   console.log(x) /* provide keys*/
    //console.log(`${x} is the shortuct for ${myobject[x]}`);
}

// FOR IN LOOP IN ARRAYS

const programming = ["js","cpp","rb","py","java"]

for (const x in programming) {
      //console.log(x) /* it will provide the indexes */
      console.log(programming[x])
}