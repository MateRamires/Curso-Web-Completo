const fs = require('fs') //Esse modulo ja vem previamente instalado no node

const caminho = __dirname + '/161-arquivo.json' //__dirname eh uma constante do node que representa o diretorio atual (por isso usou-se o dirname + /<nome do arquivo> , pois o __dirname ja eh grande parte do caminho ate o arquivo).

// Forma de ler sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Forma de ler assincrona... (Sera rodado apenas ao final do arquivo, como pode ver ao rodar esse arquivo).
fs.readFile(caminho, "utf-8", (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./161-arquivo.json') //Forma mais facil de ler todo o JSON. Ele ira ler o json e converte-lo em objeto automaticamente.
console.log(config.db)


fs.readdir(__dirname, (err, arquivos) => {  //Ler todo o diretorio (ele le o nome de todos os arquivos do diretorio)
    console.log("Conteudo da Pasta...")
    console.log(arquivos)
})
