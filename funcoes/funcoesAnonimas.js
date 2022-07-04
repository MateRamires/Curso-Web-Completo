const soma = function (x, y) { //funcao anononima eh uma funcao sem nome como no exemplo ao lado.
    return x + y
}   

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(4, 1)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function(x, y){ //vc poderia passar uma outra funcao anonima como parametro para a funcao.
    return x - y;
})
imprimirResultado(3, 4, (x,y) => x * y) //Uma funcao arrow sempre eh anonima, pois elas nunca tem nome.

const pessoa = {
    falar: function(){
        console.log("Opa")
    }
}

pessoa.falar(); //funcao anonima acessada a partir de um atributo de um objeto.