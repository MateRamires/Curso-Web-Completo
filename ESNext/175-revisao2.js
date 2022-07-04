//Arrow Function
const soma = (a,b) => a + b //Sintaxe mais flexivel (funcoes muitas vezes em apenas uma linha).
console.log(soma(2,3))



//Arrow Function (this)
const lexico1 = () => console.log(this === exports) //um this dentro de uma funcao normal aponta para o global, mas dentro de uma funcao arrow aponta para module.exports
lexico1()


//Parametros default
function log(texto = "Node"){
    console.log(texto)
}

log()
log("Sou mais forte que o valor padrao!")

// Operador Rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2,3,4,5))