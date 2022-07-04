//Instanciando um objeto atraves de Classe
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    };

    falar(){
        console.log("Meu nome eh " + this.nome); //Aqui ha necessidade do this.nome, sem isso, dara erro.
    };
}
const p1 = new Pessoa("Joao");
p1.falar();

//Instanciando um objeto atraves de Factory Function.
const criarPessoa = nome => {
    return {
        falar: () => console.log("Meu nome eh " + nome) //Aqui nao eh preciso colocar o this.nome, pois esse objeto tem ciencia do contexto lexico onde ele foi declarado.
    };
}
const p2 = criarPessoa("Joao");
p2.falar();



//Instanciando um objeto atraves de uma funcao construtora. (Aula 2)
function Pessoa(nome){
    this.nome = nome;

    this.falar = function() {
        console.log("Meu nome eh " + nome)
    }
}

const p1 = new Pessoa("Joao");
p1.falar(); //Instanciar objetos dessa maneira e por meio de classes eh bem parecido.