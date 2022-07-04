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

//Fazendo a mesma coisa da aula passada so que com promise e com o ".then".
let nomes = []
getTurma("A").then(alunos => { 
    nomes = nomes.concat(alunos.map(a => `Turma A: ${a.nome}`))
    getTurma("B").then(alunos => { 
        nomes = nomes.concat(alunos.map(a => `Turma B: ${a.nome}`))
        getTurma("C").then(alunos => {
            nomes = nomes.concat(alunos.map(a => `Turma C: ${a.nome}`))
            console.log(nomes)
        })
    })
}) //Mas ainda sim existem formas melhores de fazer isso.

//Essa eh a melhor forma de se chamar diversas promises.
Promise.all([getTurma("A"),getTurma("B"), getTurma("C")]) //Voce pode passar varias promises em um array para essa funcao. E quando todas forem resolvidas, ai sim serao chamados os metodos then ou catch.
    .then(turmas => [].concat(...turmas)) //Essa primeira linha ira juntar todas as turmas com seus alunos (objetos) dentro de um array.
    .then(alunos => alunos.map(aluno => aluno.nome)) //Essa linha ira pegar esse array de alunos e ira realizar um map, esse map ira pegar apenas os nomes dos alunos
    .then(nome => console.log(nome)) //E essa linha ira imprimir os nomes que foram pegos pelo map.


getTurma("D").then(alunos => alunos.map(aluno => aluno.nome)).then(nome => console.log(nome)).catch(e => console.log(e.message)) //Apenas o catch sera acionado nessa linha, pois ele dara erro e entrara no catch que possui o reject.