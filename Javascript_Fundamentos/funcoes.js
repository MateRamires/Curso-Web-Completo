console.log(typeof Object); //Object e classes sao consideradas funcoes em JS.


function imprimirSoma(a, b)
{
    console.log(a + b); //Essa funcao nao tem retorno.
}

imprimirSoma(2,3);
imprimirSoma(2); //Voce pode passar um argumento apenas, nao ira gerar necessariamente um erro. Mas nesse caso, o resultado sera NaN, ja que 3 + undefined (b) resulta em not a number.
imprimirSoma(2,7,7,5,4,6,2); //Voce pode passar mais que um numero tambem, ele nao ira gerar um erro, ele so ira ignorar o 3 argumento para frente.
imprimirSoma(); //Tambem eh possivel nao passar nada.


function soma(a, b = 0) //b tem um valor padrao que sera usado, caso nao seja passado nenhum valor para ele na chamada da funcao.
{
    return a + b; //Funcao que tem retorno
}

console.log(soma(2,1));
console.log(soma(2)); //Retorna o proprio 2, pois o b tem valor 0 como padrao.


const imprimirSoma2 = function(a, b) //Em javascript podemos atribuir funcoes a variaveis.
{
    console.log(a + b);
}
imprimirSoma2(2,6);


const soma2 = (a,b) => //Funcao arrow, uma forma reduzida de atribuir uma funcao a uma variavel.
{
    return a + b;
}
console.log(soma2(2,3));


const subtracao = (a, b) => a - b //Retorno implicito, forma ainda mais reduzida de retornar um valor de uma funcao.
console.log(subtracao(4, 5));

const imprimir = a => console.log(a); //Se a funcao tiver apenas 1 parametro, entao nao ha necessidade nem dos parenteses, deixando a arrow function ainda mais reduzida.
imprimir("Bacanudo!!!")


