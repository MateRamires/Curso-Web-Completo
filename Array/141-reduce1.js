const alunos = [
    {nome: "Joao", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true},
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual) //Acumulador eh o primeiro valor do array, ou seja, o indice [0] e o atual seria o segundo elemento, o indice [1].
    return acumulador + atual //No final ele ira somar os 2 valores, e na proxima iteracao dessa callback, o acumulador sera a soma do indice [0] + [1]. E na proxima iteracao da callback ele ira analisar essa soma como "acumulador" e o indice [2] como "atual". 
}, 10 ) //O primeiro parametro da funcao reduce eh a funcao callback, o segundo parametro eh o valor inicial e eh opcional. Por exemplo, posso passar 10 e o acumulador ao inves de comecar com 0, ira comecar com 10.

console.log(resultado)









