const porta = 3003 //Cada processo que necessita se comunicar com a rede, precisa de uma porta, e essa porta eh unica por processo. (Basicamente, a porta eh a forma que voce tem para selecionar qual processo (porta) vai atender uma requisicao)
//Obs :Porta 80 eh a porta padrao quando voce nao sabe qual porta informar.

const express = require('express') //express esta dentro de node modules e possui um arquivo index.js que vai ser carregado ao fazer o require.
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./168-bancoDeDados')

//Essa funcao sempre eh chamada ao usar o post/get, e ela evita que erros ocorram.
app.use(bodyParser.urlencoded({extended: true}))

//Essa funcao ira ser chamada quando utilizarmos o metodo get no postman com o link "http://localhost:3003/produtos" e ele devolvera todos os objetos que esta no array "Produtos" criado no arquivo "bancoDeDados.js"
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) //Metodo send enviara o objeto, e esse objeto sera convertido para JSON.
}) 

//Essa funcao eh bem parecida com a de cima, porem no final do link citado acima, se usarmos /(numero) no final do link, podemos pegar um id especifico, por exemplo: "http://localhost:3003/produtos/2" mostrara apenas o produto com id = 2 
app.get('/produtos/:id', (req, res, next)=> {
    res.send(bancoDeDados.getProduto(req.params.id)) //req.params eh o local onde se tem os parametros vindos da url (id nesse caso)
})

//Quando utilizar o metodo post junto ao link "http://localhost:3003/produtos" e passando dentro do body com o tipo "x-www-form-urlencoded" os dados (key: nome e preco / value: <nome_prod>, <preco_prod>), voce esta adicionando esse produto ao "banco de dados" com os valores passados. (Obs: as chaves tem que ter o nome passado nos objeto da funcao arrow baixo).
app.post('/produtos', (req, res, next)=> {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

//Esse metodo serve para alterar um objeto, basta utilizar o metodo "put" e passar o id logo apos o link, como "http://localhost:3003/produtos/2" se o ID nao existir, ele ira criar um novo objeto. Agora, se ja existir, ele ira substuir os valores do objeto que tinha o ID passado atraves dos valores do body.
app.put('/produtos/:id', (req, res, next)=> {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

//Esse metodo serve para excluir, ele funciona se utilizar o metodo "delete" no postman e passar o id atraves do link.
app.delete('/produtos/:id', (req, res, next)=> {
    const produto = bancoDeDados.excluirProduto(req.params.id) //Esta sendo passado a funcao "excluirProduto()" o id recebido pelo parametro, por exemplo: "http://localhost:3003/produtos/1" foi passado o id = 1 que sera recebido como parametro da funcao.
    res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`Servidor esta executando na porta: ${porta}`)
}) 
//Um unico processo pode ocupar uma porta, nao se pode ter 2 processos na mesma porta.

//app.use((req, res, next) => { //Usando o "use" qualquer url que for colocada no postman ira carregar, como se o "use" fosse um padrao. (E nesse caso nao eh necessario passar a ulr como primeiro parametro como no metodo mais acima que usamos /produtos)
//    res.send({nome: "Notebook", preco: 123.45})
//}) 



//Aula 170 - foi usado o comando "npm --save body-parser@1.18.2", esse modulo faz o parser no body, entregando os dados no formato correto, transformando o que veio no body em objeto.