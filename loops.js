
// FOR

for(let i=0; i<=10; i++){
    //console.log(i);
}

// rodando itens da lista
const cars = ["car1", "car2", "car3", "car4", "car5"]

for(let i=0; i<=10; i++){
    //console.log(cars[i]);
}

// FOR OF
// necessariamente vai percorrer todos os elementos da lista

for(let i of cars){
    //console.log(i);
}

// forEach
// exibindo cada elemnto usando uma funcao

cars.forEach(function(car){
    //console.log(car)
})
// em forEach eh possivel obter o indice do loop usando function(car, index) por exemplo
// index serah o indice do loop

// WHILE

let i = 0;

while (i < 10){
    //console.log(i);
    i = i + 1;
}

// Loop percorrendo propriedades de um objeto

const person2 = {
    firstName: "Nome1",
    lastName: "Nome2",
    age: "21",
    hobbies: ["ler", "escrever", "o que for"],
    dog: {
        nameDog: "NameDog",
        age: 3,
    },
};

for(propriedade in person2){
    //console.log(propriedade);
}

// pra acessar o valor da propriedade
for(propriedade in person2){
    console.log(person2[propriedade]);
}