const firstName = 'Primeiro'
const lastName = 'Segundo'

//console.log('Completo eh ' + firstName + ' ' + lastName )
//console.log(`Completo eh ${firstName} ${lastName} com crase ` )

// upper and lower
//console.log(`Completo eh ${firstName.toUpperCase()} ${lastName.toLowerCase()} com crase, upper and lower ` )


//const names = 'Name1,Name2,Name3'

//console.log(names.split(","))

//LISTAS

const names = ['nome3', 3, 'nome2', 'nome6', 180, 181, false, 7, 5];
// nao diferencia tipo de variavel

//names.push('ultimo'); // adiciona final da lista
//names.unshift(90); // adiciona inicio da lista

// bara buscar o indice de um elemento da lista

const indexOfNome1 = names.indexOf('nome1');
const sortedNames = names.sort();

// mapeando uma funcao na lista
const lista2 = [1, 2, 3, 4, 5];

const numerosPor2 = lista2.map(function(x){
    return x*2;
});

// filtrando valores
const idades = [23, 65, 23, 55, 12, 32];

const evenAges = idades.filter(function(x){
    return x%2 == 0;
})

// somatoria dos valores na lista
const somatoria = idades.reduce(function(x, acumulator){
    return x + acumulator;
}, 0);

// OBJETOS



console.log(idades);
console.log(somatoria);