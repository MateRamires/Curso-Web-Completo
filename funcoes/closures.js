// Closure eh o escopo criado quando uma funcao eh declarada 
//Esse escopo permite a funcao acessar e manipular variaveis externas a funcao.

const x = "Global";

function fora(){
    const x = "Local";
    function dentro() { 
        return x;
    }
    return dentro
}

const minhaFuncao = fora();
console.log(minhaFuncao()); //Neste exemplo, o valor imprimido sera "Local". 
//Pois aqui o contexto lexico da funcao "dentro()" ou seja, o local onde ela foi definida foi dentro da funcao "Fora()" sendo assim "dentro()" prioriza 
//acessar as variaveis dentro de "Fora()" ja que eh dentro dela que "dentro()" foi criada.