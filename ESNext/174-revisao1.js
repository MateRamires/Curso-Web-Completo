//let e const 
{
    var a = 2
    let b = 3

    console.log(a)
    console.log(b)
}
console.log(a) //Variaveis declaradas atraves de var, conseguem ser impressas na tela mesmo que tenham sido criadas dentro de blocos como if, while.
//console.log(b) Ja variaveis declaradas atraves de let, nao conseguem ser acessadas se tiverem sido declaradas dentro de um bloco (normalmente eh o mais recomendado).


// Template String
const produto = "iPad"
console.log(`${produto} eh caro!!`)


// Operador Destructuring
const [l, e, ...tras] = "Cod3r" //l: vai receber C / e: vai receber o / tras = Vai ser um array que vai receber "d", "3", "r".
console.log(l, e, tras)

const [x, y] = [1, 2]
console.log(x, y)

const [z, ,w] = [1, 2, 3] //Forma de pular um elemento, deixando um espaco em branco , , no destructuring.
console.log(z, w)

const {idade, nome} = {nome: "Ana", idade: 8 } //Destructuring de objetos nao importa a ordem, pois o nome dentro do destructuring deve ser igual ao nome da chave do objeto.
console.log(`idade: ${idade}, nome: ${nome}`)

const {idade: i, nome: m} = {nome: "Ana", idade: 8 } //Para fazer com que a variavel nao tenha o mesmo nome da chave, da para se usar dessa maneira {nome_da_chave: novo_nome}
console.log(`idade: ${i}, nome: ${m}`) 