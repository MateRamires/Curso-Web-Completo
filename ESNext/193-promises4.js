function gerarNumeroEntre(min, max, tempo){
    if(min > max)
        [max, min] = [min, max] //Caso o usuario digite um numero minimo maior que o maximo, criamos um destructuring (Lado esquerdo) e colocamos as 2 variaveis max e min do lado direito. Assim, min sera atribuido a max e max sera atribuido a min, realizando a troca.

    return new Promise(resolve => {
        setTimeout(function(){
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros(){
    return Promise.all([ //Promise.all ira resolver todas as promises que estarao dentro do array que sera criado.
        gerarNumeroEntre(1, 60, 1000),
        gerarNumeroEntre(1, 60, 500),
        gerarNumeroEntre(1, 60, 4000),
        gerarNumeroEntre(1, 60, 300),
        gerarNumeroEntre(1, 60, 100),
        gerarNumeroEntre(1, 60, 1500)
    ])
}


console.time("Promise") //Inicia um contador
gerarVariosNumeros()
    .then(numeros => console.log(numeros))
    .then(() => {
    console.timeEnd("Promise") //Acaba o contador (que vai acabar apos todas as promises terem sido resolvidas) e mostra o tempo que demorou do inicio ao fim. 
    })
