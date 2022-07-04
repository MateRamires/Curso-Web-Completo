const carrinho = [
    '{ "nome" : "Borracha", "preco" : 3.45 }',
    '{ "nome" : "Caderna", "preco" : 13.90 }',
    '{ "nome" : "Kit de Lapis", "preco" : 41.22 }',
    '{ "nome" : "Caneta", "preco" : 7.50 }',
]

// Retornar um array apenas com os precos (Minha forma)
const resultados = carrinho.map(function(e){
    let aux = JSON.parse(e)
    return aux.preco
})
console.log(resultados)


// Retornar um array apenas com os precos (Forma do professor)
const paraObjeto = json => JSON.parse(json) //Converte JSON para objeto
const apenasPreco = produto => produto.preco 
const resultados2 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultados2)