const valor = "Global";

function minhaFuncao() {
    console.log(valor);
}

function exec(){
    const valor = "Local"
    minhaFuncao(); //Aqui a pergunta seria, "minhaFuncao" vai imprimir o valor "Local" ou "Global"? A resposta seria o valor global.
}

exec();

//Basicamente o motivo pelo qual "minhaFuncao()" imprime o valor "Global" e nao "Local", eh porque, "minhaFuncao()" foi criada no contexto global que no caso seria no contexto "contextoLexico.js" (nome do arquivo). E ela carrega com sigo o local onde ela foi definida (contextoLexico.js), e nao no local onde ela foi executada (que seria na funcao "exec()" nesse caso).