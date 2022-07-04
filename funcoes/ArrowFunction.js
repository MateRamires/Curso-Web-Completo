//Declaracao de funcoes arrow. (Aula 1)
console.log("Aula 1: ")
let dobro = function (a) { //Funcao na forma normal.
    return 2 * a;
}

dobro = (a) => { //Funcao arrow.
    return 2 * a
}

dobro = a => 2 * a  //Funcao arrow na forma mais reduzida. So pode ser usada em funcoes de uma unica linha, como apenas 1 return.
console.log(dobro(5));


let ola = function () {
    return "Ola"
}

ola = () => "Ola"; //Funcao arrow mesmo sem parametros tem que ter os parenteses.
console.log(ola());



//this em funcoes arrow. (Aula 2)
/* function Pessoa(){
    this.idade = 0;

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 2000) //Aqui nao ha necessidade de criar uma variavel self para referenciar o this da funcao Pessoa(), pois a arrow function pega o this do contexo lexico que seria o contexto da funcao Pessoa().
}

new Pessoa; */



//this em arrow function (Aula 3)
console.log("Aula 3: ")
let comparaComThis = function(param){
    console.log(this === param);
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj) //Agora com o bind, o this de comparaComThis aponta para o objeto "obj" e nao mais para o global.
comparaComThis(global)
comparaComThis(obj)


let comparaComThisArrow = param => console.log(this === param); //Com a arrow function, ele ja nao referencia o objeto global logo de incio.
comparaComThisArrow(global)
comparaComThisArrow(module.exports) //Esse eh o objeto cujo this referencia dentro de uma arrow function.

comparaComThisArrow = comparaComThisArrow.bind(obj) //E com o arrow function, o bind nao funciona. A funcao arrow continuara apontando pro seu this original onde a funcao foi escrita (Nesse caso, o module.exports).
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

console.log("Aula 2: ") //Fara mais sentido no painel de output.