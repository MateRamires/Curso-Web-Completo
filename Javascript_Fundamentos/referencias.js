const a = {name: "teste"};

const b = a; //Atribuicao de objetos com objetos eh feito por referencia, ou seja, b recebe o mesmo local na memoria de a.
console.log(b.name); //Entao por exemplo, b tem os mesmo atributos de a, como o nome com o valor de "Teste" por exemplo. 

b.name = "Opa!"; //E se eu alterar o valor de nome usando b, a tambem vai alterar, ja que os 2 objetos referenciam a mesma posicao na memoria.
console.log(b.name); 
console.log(a.name); 
//Isso apenas vale para tipos nao primitivos (isso nao funcionaria com uma variavel do tipo number, pois eh passada uma copia por valor e esses valore sao independentes entre si).

let valor;
console.log(valor); //O valor foi declarado, mas nao foi inicializado, nao tem valor, resultando em undefined.

valor = null; //Null quer dizer que nao tem nenhum valor e nao esta apontando pra nenhum local da memoria.
console.log(valor);
//Basicamente quando queremos deixar uma variavel do tipo referencia, que aponta para um objeto por exemplo, basta utilizar o null.

const produto = {};
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; //Evitar atribuir undefined para variaveis.
console.log(produto);

produto.preco = null; //Sem preco.
console.log(produto);





