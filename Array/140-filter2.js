Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i , this)){ //Se a funcao callback retornar true, entrara no if.
            newArray.push(this[i])
        }
    }
    return newArray
}



const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true},
    { nome: "iPad Pro", preco: 4199, fragil: true},
    { nome: "Copo de Vidro", preco: 12.49, fragil: true},
    { nome: "Copo de Plastico", preco: 18.99, fragil: false}
]

const produtosCaros = p => p.preco >= 500; // Essa funcao ira analisar se o preco for maior ou igual a 500, se sim, ela retorna true.
const produtosFragil = p => p.fragil // Posso omitir o "== true" pois como o atributo fragil retorna true ou false, entao caso ele retorne true ele ira passar automaticamente pelo filter, e se ele for false, ele automaticamente nao passara pelo filter.

console.log(produtos.filter2(produtosCaros).filter2(produtosFragil))
