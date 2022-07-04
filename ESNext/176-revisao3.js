// ES8: Oject.values / Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))


//Melhorias na notacao literal
const nome = "Carla"
const pessoa = {
    nome, //Quando a chave tem o nome igual a variavel passada (nome nesse caso), apenas usando "nome" o JS ja entende que a chave e o valor tem mesmo nome.
    ola() { //Forma mais facil de criar funcoes
        //...
        console.log("Aloha!")
    }

}
console.log(pessoa.nome, pessoa.ola())


// Class
class Animal {}
class cachorro extends Animal {
    falar(){
        return "Au au!"
    }
}
console.log(new cachorro().falar())