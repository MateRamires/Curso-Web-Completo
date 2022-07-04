//Callbacks (Aula 1)
const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice){
    console.log(indice + 1 + ": " + nome)
}

fabricantes.forEach(imprimir) //Para cada elemento do array, sera chamado a funcao imprimir. Nesse caso o for each passa o nome e o indice para a funcao imprimir.
fabricantes.forEach(function(a){ //Nesse caso o "a" seria cada nome dentro do array
    console.log(a)
})



//Callbacks (Aula 2)
const notas = [7.7, 5.5, 4.2, 8.5, 5.1, 7.2, 9.0];

//Exemplo sem callback.
const notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i]);
    }
}
console.log(notasBaixas)

//Exemplo com callback.
const notasBaixas2 = notas.filter(function (nota){ //Para cada elemento do array, sera chamada esse metodo filter, que como o nome ja diz, filtra a partir de um determinado parametro. E quando o parametro resulta em verdadeiro ela devolve o elemento atual
    return nota < 7; //Entao no metodo filter, foi passado uma funcao que recebe nota, e ela retorna um resultado true or false a partir de (nota < 7), se for true, esse elemento sera alocado ao array notasBaixas.
}) 
console.log(notasBaixas2);

//Callback com funcao arrow.
const notasBaixas3 = notas.filter(nota => nota < 7);
console.log(notasBaixas3);



//Callbacks no Browser (Aula 3)
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log("O evento ocorreu!")
}