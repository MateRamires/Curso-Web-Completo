//Arquivo package-lock.json permite definir exatamente a versao que foi baixada dos pacotes do codigo.

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chinesa = p => p.pais === 'China'
const mulher = p => p.genero == 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response => { //get() obtem uma informacao do servidor, e o then() acontece apos a requisicao (get(url)) retornar.
    const funcionarios = response.data //Dentro do atributo data, eu possui a lista de funcionarios vinda do URL
    //console.log(funcionarios) //Agora a variavel funcionario possui todo o conteudo vindo da url json.

    console.log(funcionarios.filter(mulher).filter(chinesa).reduce(menorSalario))
    
}) 


//Aula 160 - Instalando Deps & Scripts.
//Se a pasta "node_modules" que contem o axios for apagada, como a pasta "154-funcionarios" contem o "package.json" que diz para o node as dependencias do projeto, ao usar o "npm i" no terminal, todas as dependencias contidas no "package.json" serao instaladas novamente.

//Foi colocado na pasta "package.json" alguns scripts que permitem que "154-funcionarios" (que tambem foi definido como arquivo main da aplicacao, que era o index.js antes) rode com o nodemon ao usar "npm start" no console. Porem, isso so funciona pois start eh uma palavra chave e existente do node. Porem, se criarmos um outro script com um nome que nao eh uma palavra chave do node, ele so ira rodar se usarmos "npm run <nome_associado_ao_comando>"
//Isso tudo vale apenas para o objeto "scripts" dentro de package.json. Dentro desse objeto que podem ser criados diveros scripts diferentes com nomes definidos pelo programador e funcionamentos diferentes. Mas se for um nome que nao eh previamente conhecido pelo node, tera de usar "npm run <nome>".
//Em suma, se for um comando previamente esperado pelo node, usar "npm <nome>", e se nao for um nome previamente esperado, usar "npm run <nome_do_script>".



