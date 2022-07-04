function meuObjeto() { }
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuObjeto.prototype === obj1.__proto__) //Ao criar um objeto atravez de uma funcao, __proto__ aponta para a funcao.prototype e nao para o Objeto.prototype como os outros objetos.
console.log(obj1.__proto__ === Object.prototype) //E aqui nesse caso, essa preposicao sera falsa, pois o objeto prototype de "obj1" eh apenas o meuObjeto.prototype

meuObjeto.prototype.nome = "Anonimo" //Posso adicionar um atributo ao prototype da funcao "MeuObjeto" assim como posso em Object.prototype
meuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome eh ${this.nome}!`)
} 

obj1.falar()

obj2.nome = "Rafael" //Sobescreveu o atributo nome vindo de "MeuObjeto.prototype".
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype //Posso atribuir a referencia do __proto__ para outra. (nesse caso de Object.prototype -> MeuObjeto.prototype)
obj3.nome = "Ricardo"
obj3.falar()

//Resumindo 
console.log(obj1.__proto__ === meuObjeto.prototype)
console.log(meuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)



