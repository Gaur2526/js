const accountId = 1325
// comst means once value is assigned can't be changed
let accountEmail = "akash@google.com"
var accountPassword = "hgdhgdj"
accountCity= "noida"  /*js allow us to assign a memory location to a variable without declaration of it's type but don't do this bcz of not a good practice */

let accountState;
 
// accountId= 2; /* cannot be assigned bcz of const variable  */

accountEmail = "gaur@gmail.com"
accountPassword="7454"
accountCity = "gr. noida"
console.log(accountId);

console.table([accountId, accountEmail, accountPassword,accountCity,accountState])

/* table method helps to skip multiple console statements and represent the data in tabular form 
syntax : console.table([variable_1,...,variable_n]) */

/*
Prefer not to use var
because of issue in block scope and functional scope
*/