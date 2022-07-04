const moduloA = require('../../150-moduloA') // o primeiro .. sai da pastaB (pasta atual), o segundo .. sai da pastaA e depois ele esta na pasta node, onde ira pegar o moduloA.
console.log(moduloA.ola)
//Obs: O nome do arquivo deve ser exatamente igual, com as letras maiusculas.

const saudacao = require('teste') //Se voce criar uma pasta dentro de node_modules e adicionar um "index.js" dentro dessa pasta, voce pode dar um "require" nessa pasta/modulo de forma simples (igual ao lodash). Obs: o nome do arquivo tem que ser "index.js" se tiver uma letra diferente, ja nao dara certo.
console.log(saudacao.ola)


const http = require('http') //Esse eh um modulo interno do node, que ja vem junto com a instalacao.
http.createServer((req, res) => {
    res.write("Bom dia!")
    res.end()
}).listen(8080)



