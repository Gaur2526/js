/*getOwnPropertyDescriptor() method will provide the hidden details of the module just like in the example below we are fetching info of PI value in Math module */
const descriptor = Object.getOwnPropertyDescriptor(Math,'PI');
//console.log(descriptor);

const chai = {

    name : 'ginger chai',
    price : 250,
    isAvailable : true,
    
    orderChai : function(){
         console.log('sorry')
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,'name'));
/* getOwnPropertyDescriptor()  basically defines the three properties of a module 1.writable 2.enumerable 3.configurable*/

/* so we can also change the properties as for our interest by using defineProperty() method*/

Object.defineProperty(chai,'name',{
    //writable : false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

for (let [key,value] of Object.entries(chai)){

    if(typeof value != 'function'){
        console.log(`${key} : ${value}`);
        /*this will iterate through all key value pair of chai object because we have set enumerable to true for name but if we make it false then it will iterate for other key value pairs execept name on which we use defineProperty() method */
    }
}

