var numero = 1;
{
    let numero = 2
    console.log("Dentro do bloco = " + numero);
}

console.log("Fora do bloco = " + numero); //O let tem um funcionamento diferente do var. Nele, as variaveis dentro de blocos que NAO sao funcoes, deixam de existir fora deles. No exemplo, o numero foi declarado dentro e fora do bloco, dentro ele tem um valor (2) e fora tem outro (1).


var numero2 = 1;
{
    let numero3 = 2;
    console.log("Dentro do bloco = " + numero2); //Caso a variavel nao seja encontrada dentro do escopo do bloco, ela pode pegar uma variavel do escopo global para a utilizar. Como eh aqui nesse caso.
}

console.log("Fora do bloco = " + numero2);
//console.log("Fora do bloco = " + numero3); Esse codigo iria gerar um erro, uma vez que a variavel numero3 foi criada dentro de um bloco.

// Resumindo, variaveis let, tem escopo global, escopo de funcao e tem um escopo a mais que seriam os escopos dos blocos.