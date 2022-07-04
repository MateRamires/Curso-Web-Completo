const http = require('http') //Pegando o modulo http padrao do node.

const getTurma = letraTurma => { 
    const url = `http://files.cod3r.com.br/curso-js/turma${letraTurma}.json` //Pegando a ulr passada na aula
    return new Promise((resolve, reject) => {
        http.get(url, res => { //get eh um metodo que recebe como parametro, a url em que ele ira trabalhar e a resposta.
            let resultado = ''
    
            res.on('data', dados => { //res ira chamar o metodo on e passar todos os dados presentes na URL e passa-los a variavel resultado.
                resultado += dados
            })
    
            res.on('end', () =>{
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

// Recurso ES8 - Objetivo de simplificar o uso de Promise.
let obterAlunos = async () => { //Uma funcao async tem que ser marcada como async em sua declaracao.
    const turmaA = await getTurma("A") //O resultado de getTurma("A") sera passado a variavel "turmaA", ou seja, sera muito mais sincrono.
    const turmaB = await getTurma("B")
    const turmaC = await getTurma("C") //O mesmo sera feito para as outras turmas.
    return [].concat(turmaA, turmaB, turmaC) //concat ira juntar os 3 arrays de objetos que sao cada turma em um array so.
} // Uma funcao async retorna um objeto do tipo AsyncFunction, e em cima desse objeto que se chama a funcao then e catch.

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
