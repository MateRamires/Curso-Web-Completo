const fr = require('fs') //Fs = File System.

const produto = {
    nome: "Celular",
    preco: 1249.99,
    desconto: 0.15   
}

fr.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => { //O primeiro parametro sera o local e o nome do arquivo que sera gerado, e o segundo argumento eh o conteudo que sera colocado nesse arquivo (Nesse caso passamos o objeto e transformamos ele em um JSON com o strigify).
    console.log(err || "Arquivo Salvo!") //Se tiver algum erro "err", ele ira imprimir tal erro, caso nao haja nenhum erro, ira imprimir "Arquivo Salvo!".
}) 





