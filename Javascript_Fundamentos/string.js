let nome = "Matheus";

console.log(nome.charAt(4)) //Mostrara o caracter na posicao especificada, iniciada em 0.
console.log(nome.charCodeAt(3)); //Mostrara o valor na tabela unicode da posicao especificada.
console.log(nome.indexOf("t")); //Mostrara na tela a posicao onde o valor especificado esta dentro da string.

console.log(nome.substring(1)); //Imprimira a string a partir do valor especificado.
console.log(nome.substring(0, 3)); //Tambem podemos colocar o valor da ultima posicao a ser imprimida.

console.log("Meu nome é " .concat(nome).concat("!")); //Concatenacao de valores e variaves de uma string.


console.log(nome.replace("M", "A")) //Substitui o caracter ou caracteres informados por outros caracteres informados no segundo parametro.

console.log('Ana,Maria,Pedro'.split(",")); //Gera um array com os 3 nomes, uma vez que foi passado como parametro a virgula que os separava.

const nome2 = "Rebeca";
const concatenacao = "Ola " + nome2 + "!"
const template = `
    Ola 
    ${nome2}!`;

console.log(concatenacao, template); //O template string mostra a string da forma como ela foi escrita, com os espacos e quebras de linhas. Diferente da concatenacao normal que nao permite quebra de linhas e os espacos nao fazem diferenca. O template string tambem pode conter expressoes, funcoes, etc, contanto que esteja dentro das chaves e com o simbolo de dolar, como foi escrito.

console.log(`1 + 1 = ${1 + 1}`) //Dentro das chaves, ele realiza a conta.

