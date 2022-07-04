const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"]

aprovados.forEach(function(nome, indice){ //Para cada elemento do array, o for each eh chamado com a funcao que foi passada. Nessa funcao, sempre sao passados dois parametros, o primeiro sera o valor do elemento analisado e o segundo parametro sera o indice desse elemento.
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome)) //Nao eh obrigatorio passar os parametros nome e indice, eu posso passar apenas nome por exemplo.


const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados) //Posso passar uma funcao ja pronta anteriormente no codigo

//A funcao forEach passa 3 parametros, sendo o 3, o proprio array completo que esta sendo analisado. (do 4 parametro para frente, nao existe, sempre retornara undefined).
aprovados.forEach(function(nome, indice, array){ 
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

