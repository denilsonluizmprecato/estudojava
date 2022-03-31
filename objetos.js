
const person = {
    firstName: "Nome1",
    lastName: "Nome2",
    age: "21",
    hobbies: ["ler", "escrever", "o que for"],
};

const idade = person.age;
const primeiroNome = person.firstName;


// atribuindo valores do objeto a variaveis de forma direta
const {firstName, lastName, hobbies, age} = person;
// necessariamente as variaveis tem o nome da propriedade

// Adicionando propriedades a um objeto jah existente
// person.dog = "nome Dog";

// eh possivel adicionar objetos a objetos:

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

// mudando valores das propriedades dos objetos
person2.dog.age = 6;
person2.dog.nameDog = "dogNome1";

// atribuindo valores das propriedades dos objetos a variaveis
const {firstName:nome11, lastName:nome22, hobbies:hobbies22, age:idade1} = person2;
// assim criamos novas variaveis 

// idem com objeto dentro de objeto
const { dog:{ nameDog:nomedocachorro} } = person2;

// OBJETO com lista (uma lista onde cada elemento eh um objeto)
// o acesso a cada objeto da lista se da por indice da lista

const toDos = [
    {
        id: 1,
        description: "things to do",
        completed: false,
    },
    {
        id: 2,
        description: "things to do again",
        completed: false,
    },
    {
        id: 3,
        description: "things to do again and again",
        completed: true,
    },
];

console.log(toDos);


