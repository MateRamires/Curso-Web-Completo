//p.then(function(valor){    then, sem o arrow function.
//    console.log(valor)
//})

let p = new Promise(function(cumprirPromesa){
    cumprirPromesa(["Ana", "Bruno","Vinicius","Matheus"]) //So se pode passar um parametro ao resolve e ao reject. Caso queira mais de um, sera necessario passar um array ou um objeto,
})

p
    .then(valor => valor[0]) //Esse then ira retornar o primeiro elemento atraves da arrow function, no proximo then, sera passado exatamente esse primeiro elemento.
    .then(valor => console.log(valor)); //Imprimira "Ana" que eh o primeiro elemento do array, onde foi retornado atraves do primeiro then acima.


function primeiroElemento(array){
    return array[0]
}

function primeiraLetra(String){
    return String[0]
}

const letraMinuscula = letra => letra.toLowerCase()

p
    .then(primeiroElemento) //Varios then encadeados e passando a funcao diretamente como parametro.
    .then(primeiraLetra) 
    .then(letraMinuscula)
    .then(console.log) //Aqui se pode colocar o console.log diretamente, pois ele recebera o parametro e automaticamente ira imprimi-lo. 





