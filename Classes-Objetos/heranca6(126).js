function Aula(nome, videoID) { 
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo!', 112)
const aula2 = new Aula("Ate Breve!", 212)
console.log(aula1, aula2)

// Simulando o new
function novo(f, ...params){ //... (operador spread rest)
    const obj = {} //Foi criado um objeto novo, com a notacao literal
    obj.__proto__ = f.prototype //O __proto__ do objeto foi associado ao prototype da funcao "f" (a suposta funcao construtora).
    f.apply(obj, params) //params eh um array contendo todos os parametros passados
    return obj
}

const aula3 = novo(Aula, "Bem vindo!!", 123)
const aula4 = novo(Aula, "Ate breve!!", 456)
console.log(aula3, aula4)
