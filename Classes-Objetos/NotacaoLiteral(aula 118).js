const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} //Essa era a forma antiga de criar um atributo que continha a chave e o valor com o mesmo nome
const obj2 = {a,b,c} //Nas novas versoes, apenas colocar o nome da variavel/chave, ja se subentende que a chave e o valor tem o mesmo nome e dara certo.
console.log(obj1, obj2) 

//Forma de usar o valor de uma variavel como nome para uma chave
const nomeAttr = "nota"
const valorAttr = 7.86
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

//Outra maneira de usar o valor da variavel como chave.
const obj4 = {[nomeAttr]: valorAttr} 
console.log(obj4)

//Forma antiga de criar funcoes em objetos (funcao1) e forma nova (funcao2). Mesmo a segunda sendo melhor e mais pratica, as duas funcionam.
const obj5 = {
    funcao1: function() {
        // ...
    },
    funcao2(){
        //...
    }
}
console.log(obj5)


