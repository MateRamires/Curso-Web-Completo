const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa)) //Mostra apenas as chaves do objeto.
console.log(Object.values(pessoa)) //Mostra apenas os valores do objeto.

console.log(Object.entries(pessoa)) //Transforma cada uma das chaves e seus valores em um array diferente.
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true, //Ao usar Object.keys, esse atributo sera mostrado se enumerable for true. Mas se for false, o atributo nao seria mostrado.
    writable: false, //O valor nao pode ser alterado
    value: '01/01/2019' //Valor atribuido a chave.
})
pessoa.dataNascimento = "01/01/2017" //Nao ira funcionar, pois esse atributo eh writable: false
console.log(pessoa.dataNascimento) 
console.log(Object.keys(pessoa))

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) //Pega o objeto de destino (dest) e passa os atributos dos outros objetos passados (o1, o2) concatenado-os.
console.log(obj) //a chave "a" ficara com o valor do objeto "o2" pois ele sobescreveu a chave "a" do objeto "dest", ja que ele veio depois.

//freeze faz com que os atributos do objeto passado, nao possam ser alterados mais.
Object.freeze(obj)
obj.c = 123 //Nao sera aplicado a "obj" devido ao metodo freeze.
console.log(obj)


