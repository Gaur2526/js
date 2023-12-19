/* FOR LOOP */

for (let i = 0; i <=10; i++) {
    const element = i;

    if(element == 5){
        // console.log("5 is best number")
    }
    // console.log(i);
}

/* Nesting of loop */

for (let i = 1; i <=10; i++) {
    // console.log(`for outer loop value : ${i}`)
    for(let j = 1;j<=10;j++){
        // console.log(i + " * " + j + " = " + i*j )
    }
    
}

let myArray = ['akash','ashish','aman']

// console.log(myArray.length)
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)
}

/* Break & continue */

for(let i = 1;i<=20;i++){

    if(i==5){
        console.log(`${i} is detected`)
        break
    }
    console.log(`value of i is : ${i}`);
}

for(let i = 1;i<=20;i++){

    if(i==5){
        console.log(`${i} is detected`)
        continue
    }
    console.log(`value of i is : ${i}`);
}
