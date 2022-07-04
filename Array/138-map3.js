Array.prototype.map2 = function(callback){ // Como seria a funcao map.
    const newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome" : "Borracha", "preco" : 3.45 }',
    '{ "nome" : "Caderna", "preco" : 13.90 }',
    '{ "nome" : "Kit de Lapis", "preco" : 41.22 }',
    '{ "nome" : "Caneta", "preco" : 7.50 }',
]


// Retornar um array apenas com os precos 
const paraObjeto = json => JSON.parse(json) //Converte JSON para objeto
const apenasPreco = produto => produto.preco 
const resultados2 = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultados2)