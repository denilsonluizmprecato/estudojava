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

// convertendo a lista de objetos em JSON
const toDosJSON = JSON.stringify(toDos);
// fazendo a volta, de JSON para lista de objetos
const toDosVolta = JSON.parse(toDosJSON)

console.log(toDosVolta);