const userEmail = "akash@google.com"

if(userEmail){
    // console.log("User Logged In")
}
else{
    // console.log("Don't have user email") /*execute for empty */
}

/* falsy values */
/* false, 0, -0, big int 0n , "", null ,undefined, NaN */

/*unexpected truthy values*/
/* "0" , "false", " "(having space between quotes, [], {}, function(){}--this is called empty function ) */

const emptyArray = []

if(emptyArray.length === 0){
//    console.log("Array is empty")
}

/* object.keys(object) will return you an array */

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("object is empty")
}