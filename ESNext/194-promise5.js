function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        try { //Pode ser feito o tratamento de erro dentro da propria funcao tambem com o try catch.
            //espika.espiko("") //Essa linha de codigo nao funciona no JS, entao, ao entrar no try, ele ira dar erro nessa linha e o programa saira do try e entrara no catch.
            if(Math.random() < chanceErro){ //math.random() gera um numero de 0 a 1, entao se passarmos o valor de 0.5 a chanceErro, entao sera 50% de chance de entrar nesse if.
                reject("Ocorreu um erro!")
            } else {
                resolve(valor) //Em algumas situacoes essa funcao ira gerar o erro (reject) e em outras, o valor (resolve)
            }
        } catch(e) {
            reject(e)
        }
    })
}

/* funcionarOuNao("Testando...", 0.5)
    .then(v => console.log(`Sucesso: ${v}`))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log("Fim")) */


funcionarOuNao("Testando...", 0.5)
    .then(v => `Sucesso: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro dentro do then: ${err}`) //Um tratamento dentro de um then eh tratado igual um catch, ou seja, se houver um erro encontrado dentro da funcao, ele sera enviado primeiro para esse tratamento, e se houver outro, ai sim sera enviado ao catch mais abaixo.
    )
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log("Fim")) 