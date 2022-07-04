const anonimo = process.argv.indexOf('-a') !== -1 //Voce pode receber parametros pelo terminal, usando "node 173-entradaESaida.js -a" ele devolver true para a variavel "anonimo"
//console.log(anonimo)

if(anonimo) {
    process.stdout.write("Fala Anonimo!\n")
    process.exit()
} else {
    process.stdout.write("Informe o seu nome: ")
    process.stdin.on("data", data=>{
        const nome = data.toString().replace("\r\n", '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}