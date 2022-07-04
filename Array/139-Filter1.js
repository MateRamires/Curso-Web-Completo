const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true},
    { nome: "iPad Pro", preco: 4199, fragil: true},
    { nome: "Copo de Vidro", preco: 12.49, fragil: true},
    { nome: "Copo de Plastico", preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){ //Normalmente o array final eh menor que o array original ao usar filter.
    return p.preco > 2500 // Apenas produtos com o atributo preco maior que 2500 irao passar pelo filter. (filter 'filtra' os elementos)
}))

const produtosCaros = p => p.preco >= 500;
const produtosFragil = p => p.fragil // Posso omitir o "== true" pois como o atributo fragil retorna true ou false, entao caso ele retorne true ele ira passar automaticamente pelo filter, e se ele for false, ele automaticamente nao passara pelo filter.

console.log(produtos.filter(produtosCaros).filter(produtosFragil))