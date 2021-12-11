"use strict";

if (1) {
    console.log("ok!");
} else {
    console.log("Error!");
}



// if (num<49) {
//     console.log("Error");

// } else if (num>100) {
//     console.log("Mnogo");
// } else {
//     console.log("Ok");
// }

// (num === 50) ? console.log("Ok") : console.log("Error");

const num = "50";

switch(num) {
    case "49":
        console.log("Neverno");
        break;
    case "100":
        console.log("Neverno");
        break;
    case "50":
        console.log("V tochjku!");
        break;
    default:
        console.log("Ne v etot raz!");
        break;
}