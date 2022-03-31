
// MAP()
// executa a mesma funcao em cada elemento da array

const numbers = [1,2,5,6,7];


const dobra = numbers.map( function (index){
    return index * 2
})

//console.log(dobra);

// funcao como parametro de map()
// pra isso a funcao deve ser previamente definida

function multiplica3(index) {
    return index * 3
}

const multiplicado = numbers.map( multiplica3 )

//console.log(multiplicado)

// usando arrow function
const menosUm = numbers.map( index => index - 1)

//console.log(menosUm)

const fah = [3, 6, 4, 32, 0]

const cel = fah.map( index => Math.round( (index - 32) * 5/9 ) )

//console.log('Temp convert')
//console.log(cel)

// ===================================================================
// FILTER()
// filtra elementos da array

const elementos = [1, 2, 3, 4, 5, 1, 2, 7, 8, 9]
const elementosRes = elementos.filter( (elem, index, arr ) => arr.indexOf( elem ) === index )

//console.log(elementosRes)

// ===================================================================
// REDUCE()
// reduz uma serie de elementos a um soh

// trabalhando com array de objetos
const rockets = [
    { country : "X", launchers: 21 },
    { country : "A", launchers: 1 },
    { country : "B", launchers: 51 },
    { country : "C", launchers: 2 },
    { country : "D", launchers: 31 }
]

const totalLaunchers = rockets.reduce( (anterior, index) => anterior + index.launchers, 0 )
//console.log(totalLaunchers)

// ===================================================================
// EVERY()
// retorna booleano se todos elementos da array obedecem uma mesma condicao

const nvalores = [5, 3, 5, 7, 3, 2]

//console.log( nvalores.every( index => index > 1 ) )

const turma = [
    { id: 01, nome: "Fulano", age: 8 },
    { id: 01, nome: "Fulano1", age: 18 },
    { id: 01, nome: "Fulano2", age: 28 },
    { id: 01, nome: "Fulano3", age: 38 }
]

//console.log( turma.every( p => p.age >= 18 ) )

// ===================================================================
// SOME()
// retorna true se pelo menos um elemento da array obedecem uma condicao

// testa se o num eh primo
function isPrime( valor ) {
    for(let i=2; i<valor; i++){
        if (valor%i === 0){
            return false
        }
    }
    return valor > 1
}

const valoresprimos = [1, 2, 3, 4, 7, 12, 11]
const nenhumprimo = [4, 6, 8, 12, 22]

//console.log( valoresprimos.some( isPrime ) )
//console.log( nenhumprimo.some( isPrime ) )

// some() em um array de objetos
const team = [
    { id: 01, nome: "Fulano", pilot: false },
    { id: 02, nome: "Ciclano", pilot: false },
    { id: 03, nome: "Arfago", pilot: true },
    { id: 04, nome: "Trifagio", pilot: false }
]

//console.log( team.some( index => index.pilot ) )

// ===================================================================
// FIND()
// retorna o valor do primeiro elemento encontrado que obedeca uma dada condicao

const palavras = [ "teste", "casa", "fatos", "gatos", "fartos"]

//console.log( palavras.find( p => p.startsWith( "f" ) ) )

// com array de objetos, usando array team
// retorna o objeto completo, a menos que especifique qual propriedade do objeto

const objetoteste = team.find( index => index.nome.endsWith("2") )

//console.log( objetoteste.id )

// ===================================================================
// INCLUDES()
// verifica se dado elemento esta em uma dada array

const testeinclui = valoresprimos.includes( 99 )
//console.log( testeinclui )

const testeinclui1 = team.filter( p => p.nome.includes( "ag" ) )
//console.log( testeinclui1 )