function gerarNumeroEntre(min, max, numerosProibidos){
    if(min > max)
        [max, min] = [min, max] //Caso o usuario digite um numero minimo maior que o maximo, criamos um destructuring (Lado esquerdo) e colocamos as 2 variaveis max e min do lado direito. Assim, min sera atribuido a max e max sera atribuido a min, realizando a troca.
    

    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        if(numerosProibidos.includes(aleatorio)){
            reject("Numero Repetido!")
        }
        else{
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros){
    try {
        const numeros = []
        for(let _ of Array(qtdNumeros).fill()){
            numeros.push(await gerarNumeroEntre(1,60, numeros)) //O uso do await aqui eh para garantir que a funcao gerarNumerosEntre devolva apenas os numeros gerados, sem o await, seria devolvido as proprias promesas, e nao os valores gerados por elas (que eh o que nos queremos)
        }
        return numeros //E ao usar o return seria a mesma coisa que usar a funcao resolve das promises (dentro de uma funcao async).
    } catch(e){
        throw "Que chato!" //ao usar o throw seria a mesma coisa que chamar o reject das promises (dentro de uma funcao async)
    }
}

gerarMegaSena(8)
    .then(console.log) //O then ira pegar o return dentro da funcao.
    .catch(console.log) //O catch ira pegar o throw dentro da funcao.


//Basicamente dentro de funcoes async, return = resolve / throw (exceção) = reject