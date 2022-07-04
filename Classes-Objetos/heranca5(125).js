console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () { //Esse metodo nao esta presente no JS padrao, estamos criando ele agora atravez do prototype de String.
    return this.split('').reverse().join('') 
}
console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0] //Nessas funcoes criadas, sempre ha necessidade de colocar this, pois o array que ira chamar essa funcao sera o this dessa funcao. 
}
const arrayTeste = [1,2,3,4,5]
const arrayTeste2 = ["a", "b", "c"]
console.log(arrayTeste.first()) //o arrayTeste eh o this na chamada da funcao, pois ele a chamou, ou seja, dentro da funcao estaria mais ou menos assim: "return arrayTeste[0]"
console.log(arrayTeste2.first())

String.prototype.toString = function() { 
    return "Nao faca isso!!!"
} //Voce pode mudar o comportamento de funcoes que ja existem nos prototypes, como o toString. Mas nao eh nem um pouco recomendado fazer isso.
console.log('Escola Cod34'.toString())