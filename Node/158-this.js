console.log(this === global) //false, "this" fora de uma funcao nao aponta para o global diretamente, mas sim para o objeto que seria o "module.exports".
console.log(this === module) //false

//This / module.exports / expots, os tres apontam para o mesmo objeto global, ou seja, os 3 sao estreitamente iguais.
console.log(this === module.exports) //true
console.log(this === exports) //true

function logThis() {
    console.log("Dentro da funcao...")
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) //Dentro de uma funcao, this aponta para global e deixa de apontar para o "module.exports".

    //this.perigo = "..." //Ao fazer isso, eu estou colocando a variavel "perigo" dentro do escopo global. (Seria a mesma coisa que fazer "global.perigo")
}
logThis()

