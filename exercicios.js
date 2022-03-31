function idadedias (a) {
    return a * 365;
}

function salario (i, j) {
    console.log(`O salario eh R$${i*j}` )
}

function mes (a) {
    const nome = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho"];
    if (a >=0 && a < nome.length ) {
        console.log( `O mes eh: ${nome[a-1]}`);
    }
    else{
        console.log(`Numero invalido para mes!`)
    }
}

function entre (a, b, c, d=false) {

    if (d === false && a > b && a < c ){
        console.log(true);
    }
    else if (d === true && a >= b && a <= c ){
        console.log(true);
    }
    else{
        console.log(false);
    }

}

function multiplicar (a, b) {
    
    let soma = 0;
 
        for (let i=1; i<=b; i++) {
            soma = soma + a;
        }
    
    console.log(soma);

}

function repetir (a, x) {

    let array = [];

    for (let i=1; i<=a; i++){
        array.push(x + " " +i);
    }

    console.log(array);

}

function repetir (a) {

    let aux = "+";

    for (let i=1; i<a; i++){
        aux = aux + "+";
    }

    console.log(aux);

}

function primeiroUltimo (array) {

    let aux = [array[0], array.slice(-1)[0]];

    console.log( aux );

}

function deletePropOb (objeto, prop) {

    delete objeto[prop];

    console.log(objeto)

}

function filtrarNumeros (array) {

    let aux = [];

    for (let i=0; i <array.length; i++) {
        if (typeof(array[i]) === "number") {
            aux.push(array[i]);
        }
    }

    console.log(aux)
}

function objetoParaArray (objeto) {

    let array = [];

    for (let i=0; i<Object.keys(objeto).length; i++ ) {
        array.push([Object.keys(objeto)[i], Object.values(objeto)[i]]);
    }

    console.log(array);

}

const nomes = {
    nome1: "Nome1",
    nome2: "Nome2",
    nome3: "Nome3"
}

function indicenumeropares (array) {

    let aux = [];

    for (let i=0; i<array.length; i++) {

        if (i%2 === 0 && array[i]%2 === 0) {
            aux.push(array[i]);
        }

    }

    console.log(aux);

}

function bissexto (ano) {

    if (ano%4 === 0) {
        if (ano%100 != 0) {

            console.log(true);

        }
        else {
            if (ano%400 === 0) {
                console.log(true);
            }
            else {
                console.log(false);
            }
        }
    }
    else {
        console.log(false);
    }

}

function somaarray (array) {

    let soma = 0;

    for (let i=0; i<array.length; i++) {
        soma = soma + array[i];
    }

    console.log(soma);
}

function somaprecos (array) {

    let soma = 0;

    for(let j=0; j<array.length; j++){

        soma = array[j].preco + soma;
 
    }

    console.log(soma);

}

const testearray = [
    {nome: "nome1", preco: 32},
    {nome: "nome2", preco: 22},
    {nome: "nome2", preco: 22, estoque: 22},
    ]

function calcularMedia (array) {

    let soma = 0;

    for (let i=0; i<array.length; i++) {
        soma = array[i] + soma;
    }

    console.log(soma/(array.length))
}

function menornumero (array) {

    aux = array[0];

    for (let i=1; i<array.length; i++) {
        if (array[i] < aux) {
            aux = array[i];
        }
    }

    console.log(aux);
}

function sorteio (num) {

    const sorteado = Math.floor(Math.random()*9)+1;

    if (num === sorteado) {
        console.log(`Parabens o numero sorteado eh ${sorteado}!`);
    }
    else {
        console.log(`Nao acertou, o numero sorteado eh ${sorteado}!`)
    }
}

function contarPalavras (frase) {

    let cont = 1;

    for (let i of frase) {
        if (i === " ") {
            cont++;
        }
    }

    console.log(cont)
    
}

const frase = "ashjas ahsAjahs gtas hajsh";

function contarLetras (letra, frase) {

    let cont = 0;

    for (let i of frase) {
        if (i === letra) {
            cont++;
        }
    }

    console.log(cont)

}

function buscaPalavrasSemelhantes (trexo, array) {

    console.log( array.filter( a => a.includes( trexo ) ) )

}

function removerVogais (palavra) {

    let aux = "";
    let vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    for (let i of palavra) {
        if ( !vogais.includes( i ) ) {
            aux = aux + i;
        }
    }

    console.log(aux)

}

function inverterObjeto (objeto) {

    let objetoAux = {};

    for (let i=0; i<Object.keys(objeto).length; i++ ) {

        objetoAux[Object.values(objeto)[i]] = Object.keys(objeto)[i]

    }

    console.log(objetoAux)
}


const nomes2 = {
    nome1: "Nome1",
    nome2: "Nome2",
    nome3: "Nome3"
}

function filtraDigitos (numero, array) {

    let arrayAux = [];

    for (i of array) {
        
        if (i.toString().length === numero){

            arrayAux.push(i)

        }
    }

    console.log(arrayAux)

}

function segundoMaior (array) {

    let aux = array[0];
    let segundo = array[0];

    for (i of array) {

        if (i > aux) {
            segundo = aux;
            aux = i;

        }
    }

    console.log(segundo)

}


const nomes72 = {
    nome1: [4],
    nome2: [6,4,7,7],
    nome3: [7,3]
}

function mediaArray (array) {

    let soma = 0;

    for (i of array) {
        soma = soma + i;
    }

    return soma/(array.length);
}


function maiorMedia (objeto) {

    let media = 0;
    let resposta = {};

    for (let i=0; i<Object.keys(objeto).length; i++ ) {

        if ( mediaArray(Object.values(objeto)[i]) > media ) {

            media = mediaArray(Object.values(objeto)[i]);
            resposta["nome"] = Object.keys(objeto)[i];
            resposta["media"] = media;
        }

    }

    console.log(resposta)

}

function areaTriangulo (b, h ) {

    console.log( ((b*h)/2).toFixed(2) )

}

areaTriangulo(5.8, 4.234)