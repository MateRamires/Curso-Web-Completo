const notas = [6.7, 9.8, 7.7, 8.1, 5.5];

for (let i in notas){ //Forma de percorrer um array com o in. (Existem outras formas melhores de percorrer um array).
    console.log(i + ": " + notas[i])
}

const pessoa = {
    nome: "ana",
    sobrenome: "silva",
    idade: 29,
    peso: 64
}

console.log("")

for(let atributo in pessoa) { //Forma de percorrer um objeto com o in.
    console.log(atributo + ": " + pessoa[atributo])
}

