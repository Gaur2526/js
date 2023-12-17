/* switch statement is used when we have to compare one value with multiple other values*/
/* syntax */

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "july"

switch (month) {

    case "jan":
        console.log("january")
        break;
    case "march":
        console.log("march")
        break;
    case "june":
        console.log("june")
        break;
    case "july":
        console.log("july")
        break;

    default:
        console.log("default case matched")
        break;
}
