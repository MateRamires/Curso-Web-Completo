function gerarNumeroEntre(min, max){
    if(min > max)
        [max, min] = [min, max] //Caso o usuario digite um numero minimo maior que o maximo, criamos um destructuring (Lado esquerdo) e colocamos as 2 variaveis max e min do lado direito. Assim, min sera atribuido a max e max sera atribuido a min, realizando a troca.
    

    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        resolve(aleatorio)
    })
}

gerarNumeroEntre(10,50)
    .then(num => num * 10)
    .then(numX10 => `O numero gerado vezes 10 foi: ${numX10}`)
    .then(console.log)