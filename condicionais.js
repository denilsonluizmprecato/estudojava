
const sum = 82 + 8;

// quando usa === compara valor e tipo
// usando soh == compara apenas valor

if (sum === 10) {
    console.log("ok");
}
else if ( sum < 100 ){
    console.log("menor que cem");
}
else{
    console.log("not ok");
}

// && and
// || or

const sum2 = 9 + 2;

let result = sum2 === 3 ? 6 : 7;
// se sum2 for igual 3, result recebe 6
// caso contrario recebe 7

//console.log("valor de result " + result);

// SWITCH

const aux = 1;

switch (aux) {
    case 2:
    console.log("igual 2")
    break;
    case 1:
    console.log("igual 1")
    break;
    case 6:
    console.log("igual 6")
    break;
}