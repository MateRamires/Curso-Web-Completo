const fs = require('fs') //fs ou file system eh um modulo padrao do node usado para ler/alterar arquivos.
const path = require('path')


function lerArquivo(caminho) {
    return new Promise(resolve =>{
        fs.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toString())
        })
        console.log("Depois de Ler") //O JS nao vai esperar o arquivo terminar de ler para imprimir este console.log
    })
}

const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)
    .then(conteudo => console.log(conteudo))


lerArquivo(caminho)
    .then(conteudo => conteudo.split('\r\n'))
    .then(linhas => linhas.join(', '))
    .then(conteudo => `O valor final eh: ${conteudo}`)
    .then(conteudo => console.log(conteudo))