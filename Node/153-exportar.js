console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null //Mesmo atribuindo nulo ao exports, ao usar module.exports o objeto global ainda existira
console.log(module.exports)

exports = { //A atribuicao de um novo objeto nao ira funcionar com o exports.
    nome: "Teste"
}

console.log(module.exports)

module.exports = { //Mas a atribuicao de um novo objeto funciona com o module.exports
    publico: true
}

//Basicamente o this e o exports sao apenas 2 referencias para o mesmo objeto que module.exports aponta. Porem o que eh mais levado em consideracao eh o "module.exports".

