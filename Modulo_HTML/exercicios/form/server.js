const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true })) //O body-parser serve para que tudo que veio do formulario apareca no console, caso nao tenha o body-parser, ele ate ira aparecer "Parabens" ao incluir e nao dara nenhum erro no front-end, porem a variavel vinda do form vai aparecer undefined, ao inves de aparecer "nome: <nome_enviado>"

app.post('/usuarios', (req, resp)=> {  //fazendo uma requisicao do tipo post em cima da url /usuarios
    console.log(req.body) //Quando o usuario clicar em incluir, o que foi enviado atravez do form ira aparecer no console abaixo por causa dessa linha de comando. (Ex: se o usuario digitar "Pedro" ira aparecer {nome: 'Pedro'} sendo que o "nome" eh exatamente o valor dado a propriedade "name" que usamos no input no arquivo HTML.)
    resp.send("<h1>Parabens! Usuario Incluido!</h1>") //Quando o usuario clicar em incluir, sera isso que ira aparecer na tela "http://localhost:3003/usuarios"
}) 

app.post('/usuarios/:id', (req, resp)=> {  
    console.log(req.params.id) //Ao usar esse comando, o console ira mostrar na tela os parametros recebidos pelo form.
    console.log(req.body) 
    resp.send("<h1>Parabens! Usuario Alterado!</h1>") 
}) 

app.listen(3003) //Para fazer o servidor funcionar basta usar no console "node server.js" e como foi especificado que esse arquivo vai escutar a porta 3003, entao sera nessa porta que ira rodar.


//Lembrando, podemos usar o nodemon para inicializar o servidor, que fara a mesma coisa que o node, so que ele nao precisa ser reiniciado para aplicar alteracoes dessa tela server.js (npm i --save-dev nodemon)
//Curiosidade, caso tivessemos usado o metodo get em todas as partes do codigo, para pegar os dados do formulario nao poderiamos usar o "req.body", esse codigo so funciona com o post. Para pegarmos os dados com o get, usamos "req.query".