let isAtivo = false;
console.log(isAtivo);

isAtivo = 1;
console.log(!isAtivo); //Como voce nao especifica o tipo da variavel na declaracao, entao para usa-la como booleana, devera usar o operador ! (negacao), que ao juntar com o numero 1 resulta em false, e com 2 !! o resultado sera verdadeiro, uma vez que uma negacao nega a outra, resultando no valor original.
console.log(!!isAtivo);

console.log("Todos abaixo dao verdadeiro...");
console.log(!!3);
console.log(!!-1);
console.log(!!'texto string');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = 3)); //Nesse caso ele considera o valor que a atribuicao resultou, nesse caso 3, entao eh true. Mas se a atribuicao fosse isAtivo = 0, o resultado seria false.

console.log("Todos abaixo dao falso...");
console.log(!!0);
console.log(!!''); //Se o texto string nao possui nenhum valor, apenas as aspas, ele resulta em false.
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = 0));

console.log(!!('' || null || 0 || " ")); //Nesse caso retorna true, pois se apenas um dos valores dentro dos OUs da verdadeiro, entao o todo se torna verdadeiro


let nome = "";

console.log(nome || "Nome nao preenchido!"); //O uso do || (ou) nesse console.log tem a funcao de mostrar na tela o primeiro valor verdadeiro a ser encontrado, ou seja, se a variavel nome tiver algum valor dentro dela, ele mostrara o nome, agora, caso a variavel nome esteja vazia, o primeiro valor true encontrado sera o "Nome nao preenchido!" e isso que sera mostrado na tela.

nome = "Lucas";
console.log(nome || "Nome nao preenchido!"); //Agora nesse caso, em que o nome tem um valor, ele mostrara o valor da variavel nome apenas e ira ignorar o "Nome nao preenchido!".






