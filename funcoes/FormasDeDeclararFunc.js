console.log(soma(3, 4)); //Importante: A grande diferenca entre a primeira declaracao e a segunda eh que: Quando se usa a primeira, vc pode chamar a funcao acima de onde ela foi declarada, como eh o exemplo ao lado.
//console.log(sub(3, 4)); E a segunda dara erro, pois nao se pode chama-la antes dela ser declarada, como no exemplo ao lado. Isso acontece pois o JS carrega sempre primeiro as funcoes padroes antes de comecar a executar o codigo linha a linha. 
//Essa regra tambem se aplica a named function expression, ela tambem dara erro se for chamada antes de ser declarada.


// function declaration
function soma(x, y) {
    return x + y;
}

// function expression (declarar uma funcao anonima e atribuir ela a uma variavel/const).
const sub = function(x, y){
    return x - y
}
console.log(sub(3, 4))

// named function expression (mesma coisa que o de cima, mas a funcao aqui eh nomeada).
const mult = function mult(x, y){
    return x * y;
} //Pouco usada.
console.log(mult(3, 4))

