// Usando a notacao literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object + " - " + typeof new Object) //Object eh uma funcao e a instancia (new object) eh um objeto.
const obj2 = new Object
console.log(obj2)

// Funcoes construtoras
function Produto(nome, preco, desc){
    this.nome = nome; //Atributo public por causa do this
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc) //Preco e produto sao private, eles estao com escopo apenas dentro da funcao construtora.
    }
}

const p1 = new Produto("caneta", 7.99, 0.15)
const p2 = new Produto("caneta", 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Funcao Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario("Joao", 7980, 4)
const f2 = criarFuncionario("Joao", 11400, 1)
console.log(f1.getSalario(), f2.getSalario())


// Object.create
const filha = Object.create(null)
filha.nome = "Ana";
console.log(filha)

// Uma funcao famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info) //O JSON foi transformado em um objeto.
