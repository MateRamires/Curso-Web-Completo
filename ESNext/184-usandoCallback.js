//Sem promise.
const http = require('http') //Pegando o modulo http padrao do node.

const getTurma = (letraTurma, callback) => { 
    const url = `http://files.cod3r.com.br/curso-js/turma${letraTurma}.json` //Pegando a ulr passada na aula
    http.get(url, res => { //get eh um metodo que recebe como parametro, a url em que ele ira trabalhar e a resposta.
        let resultado = ''

        res.on('data', dados => { //res ira chamar o metodo on e passar todos os dados presentes na URL e passa-los a variavel resultado.
            resultado += dados
        })

        res.on('end', () =>{
            callback(JSON.parse(resultado)) //Ao fim de tudo, o res ira chamar o on com "end" e este sera acionado apos todos os dados da turma serem passado a variavel resultado, apos isso, ele ira transformar o JSON em resultado em objeto, e esse array de objeto sera enviado como parametro a funcao callback que iremos declarar abaixo.
        })
    })
}

//Essa forma usando callbacks eh chamada de "callback hell".
let nomes = []
getTurma("A", alunos => { //Foi passado a funcao getTurma a letra da turma como primeiro parametro e a funcao callback que sera usada no "on end" dentro da funcao getTurma, para receber os nomes dos alunos.
    nomes = nomes.concat(alunos.map(a => `Turma A: ${a.nome}`))
    getTurma("B", alunos => { //Callback encadeada, chamamos a funcao getTurma 3 vezes, uma vez para cada letra (A,B,C) ou seja uma vez para cada turma.
        nomes = nomes.concat(alunos.map(a => `Turma B: ${a.nome}`))
        getTurma("C", alunos => {
            nomes = nomes.concat(alunos.map(a => `Turma C: ${a.nome}`))
            console.log(nomes)
        })
    })
}) //Essa nao eh a melhor forma de se fazer isso, a melhor forma eh usando promise que sera mostrado no proximo arquivo.
