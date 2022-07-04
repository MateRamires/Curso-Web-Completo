const peso1 = 2.0;
const peso2 = Number("4.0"); //Outra forma de atribuir um numero a uma variavel.

console.log(peso1, peso2);
console.log(Number.isInteger(peso2)); //Forma de verificar se o numero eh inteiro. Retornara true ou false.

const numeroGrande = 5.32451245;

console.log(numeroGrande.toFixed(2)); //toFixed(x), x indicara o numero de casas decimais que o numero em questao tera ao ser mostrado na tela.

console.log(numeroGrande.toString()); //Transfomara o numero em string (colocando 2 como parametro, transformara em binario).

console.log("10" / 2); //Mesmo 10 sendo uma string, essa operacao ira funcionar e ira devolver o valor 5.

console.log((10.234).toFixed(1)); //Para utilizar o toFixed em um numero "solto" (sem variavel), eh necessario usar paranteses em volta desse numero.

console.log("3" + 2); //Isso resultara 32, ele nao fara a operacao, pois o + funciona como concatenacao. Se fosse / ou -, ele faria a operacao, pois esses 2 operadores nao servem como concatenacao.
console.log("3" - 2); //Nesse caso, ele fara a operacao e resultara 1.

//A classe Math, tambem esta presente em javascript, para chama-la, usar Math.Funcao(Parametros).
