const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); //Quando voce pede um elemento que nao existe dentro de um array, ele nao dara erro, e sim retornara um valor undefined.

valores[4] = 10; //Arrays em JS sao flexiveis, voce pode criar ele com 4 elementos e depois no meio do codigo criar uma nova posicao ao array.
console.log(valores[4]);

//valores[8] = 10;
//console.log(valores); Voce tambem pode criar uma posicao bem a frente no array, sendo assim, o array tera por exemplo 3 posicoes vazias ate chegar na posicao que tem numero novamente.

console.log(valores.length); //Mostra o numero de elementos do array.

valores.push({id: 3}, false, null, "Teste"); 
console.log(valores); //Os array tambem sao fracamente tipados, ou seja, voce pode colocar um array com numbers, strings, bools, objetos, etc.

console.log(valores.pop()); //Pega o ultimo valor do array e mostra na tela, e depois o tira do array.
console.log(valores);

//delete valores[0]; Deleta um valor especificado.
//console.log(valores)

console.log(typeof valores); //Array eh um objeto em JS.



