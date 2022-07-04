//Aula 1
function criarPessoa(){ //Factory eh uma funcao que retorna um objeto.
    return {
        nome: 'Ana',
        sobrenome: 'Silva' //Os atributos podem ser fixos como no exemplo ao lado, ou podem ser recebidos por parametros.
    };
};
console.log(criarPessoa());



//Aula 2
function criarProduto(nome, valor){ //Aqui nesse caso, os atributos sao criados atraves de variaveis recebidas por parametros da funcao.
    return {
        nome,
        valor, //Obs: como o nome da chave eh o mesmo nome do valor (nome: nome / valor: valor), vc pode omitir o nome da chave que o JS vai entender que os dois possuem o mesmo nome.
        desconto: 0.1
    };
};
console.log(criarProduto("Macarrao", 20));
console.log(criarProduto("Notebook", 2439.99));