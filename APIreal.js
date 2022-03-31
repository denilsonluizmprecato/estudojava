
async function getPeople() {
    const response = await fetch( 'http://randomuser.me/api/?results=10' )

    return response.json()
}

//getPeople().then( data => console.log( data ) )

getPeople().then( data => {
    const people = data.results

    // filtrando gender female
    //console.log(people.filter( p => p.gender === 'female'))
} )

// criando tabela com resultados da API
getPeople().then( data => {
    const people = data.results
    const tabela = []
    
    for (p of people){
        tabela.push(
            {
                "Nome": `${p.name.first} ${p.name.last}`,
                "sexo": p.gender,
                "idade": p.dob.age
            }
        )
    }

    console.table(tabela)
    console.table(tabela.filter(i => i.idade > 30))
} )  // fim getPeople().then()
