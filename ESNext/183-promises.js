function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => { //A promisse recebe uma funcao callback que tem 2 parametros, resolve em caso de sucesso e reject em caso de falha.
        setTimeout(() => {
            resolve(frase) //Resolve sempre aceita apenas um parametro, se quiser passar varias coisas deve-se passar um array ou um objeto.
        }, segundos * 1000)
    })
}

falarDepoisDe(3, "Que daora!!!") //Essa funcao ira devolver a Promise.
    .then(frase => frase.concat("?!?")) //.then eh um metodo de Promise que define o que sera feito apos a promise ser realizada
    .then(outraFrase => console.log(outraFrase)) //outraFrase sera a variavel "frase" que foi retornado do .then acima. 
    .catch(e => console.log(e)) //Se o promise retornar o reject, o metodo catch que sera acionado ao inves de then.

//Obs: O parametro que foi passado ao resolve/reject sera o parametro passado ao then/catch.