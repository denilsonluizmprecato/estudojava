
// sintaxe basica de funcao

function sum (a , b){
    console.log(a + b)
}

// funcao com valor de parametro pre-definido
function sum1 (a , b=10){
    console.log(a + b)
}

// arrow function, pro caso de uma unica linha
const sumArrow = (a , b) => a + b;

// se mais de uma linha
const sumArrow1 = (a , b) => {
    return a + b;
}

