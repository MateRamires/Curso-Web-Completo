console.log("a = " + a); //Em JS existe um conceito chamado hoisting. Basicamente se voce pede um valor de uma variavel que nao existe e depois a declara mais a frente no codigo, ele nao dara erro como em outras linguagens, ele apenas dira que a variavel tem um valor nao definido. 
var a = 2;
console.log("a = " + a);
//Nao tem motivo para fazer uso disso, entao consequentemente, nao eh recomendado. Eh apenas uma curiosidade do JS.


//console.log("b = " + b); 
let b = 2; //Esse efeito de hoisting nao ocorre com variaveis let, apenas com variaveis var. Se tentar fazer esse efeito com let, ele ira gerar um erro no programa.
console.log("b = " + b);
