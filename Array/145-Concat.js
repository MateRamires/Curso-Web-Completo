const filhas = ["Ualeskah", "Cibalena"]
const filhos = ["Uoxiton", "Uesclei"]
const todos = filhas.concat(filhos, "Fulano") //Concatena o array "filhas" com o array "filhos" com o nome "Fulano" e resulta num novo array com os 5 nomes (Os array originais nao se alteram).
console.log(todos)

console.log([].concat([1,2], [3,4], 5, [[6,7]])) //4 parametros foram passados ao concat, os dois primeiros sendo arrays, o 3 sendo um numero solto e o 4 sendo uma matriz. 


