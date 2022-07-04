// Estategia para gerar valor padrao.
function soma1(a, b, c){
    a = a || 1; //a vai receber o valor de a, vindo do param OU 1 (caso nao venha nada do param).
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma1(), soma1(3), soma1(1, 2, 3));
console.log(soma1(0,0,0)); //Nesse caso, essa estrategia falha, pois, 0 eh falso entao ele entende que 0 OU 1 resultara no 1 e nao no 0 que foi passado.


//Estrategia 2,3 e 4 para gerar valor padrao
function soma2(a, b, c){
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1; //Dentro de arguments existe o indice 1? se sim atribua-o a variavel b, se nao, atribua o valor 1. (Se vc tiver testando o argumento 2 por exemplo, tem de se colocar 2 in arguments e assim por diante).
    c = isNaN(c) ? 1 : c; //Caso seja um not a number atribua 1 a variavel c, se for um number, atribua c a c. (Essa eh a estrategia mais segura)
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))


//Valor padrao do es2015
function soma3(a = 1, b = 1, c = 1){ //Forma mais adequada.
    return a + b + c
}

console.log(soma3());
