
// !! testa se a variavel eh verdadeira ou falsa

const x = '';

//console.log(!!x);

// uma string vazia sempre eh false, tbm null, undefined
// lista vazia e objeto vazio eh true

// para testar lista vazia testa-se o comprimento dela

const list = [];

if (list.length === 0){
    console.log('comprimento 0 \nnada na lista')
}
else{
    console.log('ha algo na lista')
}

// apenas um ! inverte o valor booleano