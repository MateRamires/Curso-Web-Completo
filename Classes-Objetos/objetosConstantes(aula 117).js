// pessoa aponta para um endereco de memoria, e esse endereco aponta para o objeto em si {...}
const pessoa = {nome: "joao"}
pessoa.nome = "Pedro" //Eu posso alterar atributos de objetos constantes.

// Nesse caso, esse novo objeto vai ser atribuido a pessoa, so que, esse novo objeto pertence a outro endereco de memoria, e como 'pessoa' eh uma constante, entao o endereco de memoria que ela aponta nao pode mudar, e esse codigo abaixo causara um erro por isso.
// pessoa = {nome: "Ana"}

Object.freeze(pessoa) //Esse metodo congela o objeto, fazendo com que possiveis mudancas nos atributos nao sejam feitas.
pessoa.nome = "Maria" 
console.log(pessoa.nome) //Por exemplo, mesmo com o codigo acima 'pessoa.nome = maria', o objeto ira continuar com o .nome de Pedro, que foi o nome que estava antes do congelamento.
//Object.freeze eh uma maneira de tornar todo o objeto constante. Nao podendo alterar/adicionar/remover atributos do objeto.






