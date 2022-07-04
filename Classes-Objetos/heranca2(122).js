// Cadeia de prototipos (prototype chain)
Object.prototype.att0 = "0" //Nao eh recomendado colocar metodos e atributos ao Object.prototype, pois isso afeta todos os objetos.
const avo = { att1: "A"}
const pai = {__proto__: avo, att2: "B", att3: "TESTE"} //Essa eh a forma de mudar o prototipo de um objeto, usando o __proto__ e especificando a quem ele vai apontar.
const filho = {__proto__: pai, att3: "C"}
console.log(filho.att1) //Filho nao possui atributo 1, porem, o JS pega do avo que eh prototype de pai que eh prototype de filho
console.log(filho.att0)
console.log(filho.att3) //Mesmo que o objeto pai tenha o att3, o objeto filho da prioridade ao att3 que esta presente dentro dele mesmo.

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: "F40",
    velMax: 344 //Apartir do momento que o objeto "ferrari" herdar de "carro", o atributo velMax de "ferrari" tera prioridade sob o atributo velMax de "carro". Isso eh chamado de shadowing.
} 
const volvo = {
    modelo: "v40",
    status() { //Shadowing da funcao status
        return `${this.modelo}: ${super.status()}` //super pega o atributo ou metodo da classe pai.
    }
}

Object.setPrototypeOf(ferrari, carro) //forma de uma classe herdar (prototipar) de outra. Eh passado primeiro a classe filha depois a classe que sera pai.
Object.setPrototypeOf(volvo, carro)

console.log(ferrari) //Na hora de imprimir o objeto, sera mostrado apenas os atributos e metodos locais dessa classe, nao serao mostrados da classe pai, avo, etc...

volvo.acelerarMais(100)
console.log(volvo.status())


ferrari.acelerarMais(300)
console.log(ferrari.status()) //o this do metodo status() no objeto pai, quando chamado pelo objeto ferrari, esse this referencia ferrari agora, por isso a velMax apresentada no metodo sera 344 (a vel max sobescrita pelo objeto ferrari).