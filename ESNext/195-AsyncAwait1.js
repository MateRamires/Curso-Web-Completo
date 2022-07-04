function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Executando Promise....")
            resolve() //O valor que estara presente ao chamar o .then sempre estara aqui no parametro do resolve.
        }, tempo)
    })
}

/* esperarPor(2000)
    .then(esperarPor)
    .then(esperarPor) */

function retornaValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(1), 5000)
    })
}


async function executar() {
    let valor = await retornaValor() //a funcao ira esperar essa promise ser resolvida, ao ser resolvida, sera atribuido o 1 a "valor" e o codigo ira prosseguir para as proximas promises.

    await esperarPor(1500) 
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 10 //Como "valor" esta esperando uma promise, entao se eu quiser pegar o valor de "Valor" eu terei de usar o .then fora da funcao.
} //Com os awaits, o codigo era esperar a promise ser resolvida para continuar seguindo em frente, caso fosse retirado a palavra await, ele iria executar todos os console.logs, e depois de 1,5 todas as 3 promises seriam resolvidas ao mesmo tempo.


executar()
    .then(console.log)

//Toda funcao async retorna uma promise, mesmo que nao seja explicitamente designada como uma.