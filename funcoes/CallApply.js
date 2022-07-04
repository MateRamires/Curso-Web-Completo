function getPreco(imposto = 0, moeda= "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "Notebook",
    preco: 4589,
    desc: 0.15,
    getPreco //Como ja existe um metodo getPreco, eu posso apenas colocar getPreco que o JS ja vai associar a chave getPreco a funcao getPreco()
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) //Nesse contexto ele esta acessando o this global, tanto que os comandos global.preco irao funcionar em conjunto a chamada da funcao.

console.log(produto.getPreco()) //Forma padrao de executar a funcao getPreco() com o contexto de produto

const carro = { preco: 49990, desc: 0.20}

console.log(getPreco.call(carro)); //A funcao call recebe como parametro, o objeto que a funcao getPreco() vai utilizar como contexto.
console.log(getPreco.apply(carro)); //Nesse caso, a funcao apply e call tem o mesmo funcionamento.

console.log(getPreco.call(carro, 0.17, '$')); //A diferenca entre os 2 pode ser vista nesse outro caso. A funcao call recebe como primeiro parametro o contexto (carro) e ela tambem pode receber os parametros que serao passados a funcao getPreco (imposto e moeda respectivamente).
console.log(getPreco.apply(carro, [0.17, '$'])); //E no apply, os parametros sao recebidos dentro de um array, ao inves de serem separados como no call.

