
/* setTimeout(function(){ //Isso pode acontecer em uma situacao real, e eh chamado de callback hell, callbacks sendo chamadas dentro de callbacks, etc...
    console.log("Executando Callback...")
    
    setTimeout(function(){ //Uma callback dentro de uma callback. 2 segundos para executar a primeira callback e dentro da primeira callback tem outra funcao callback que executara apos mais 2 segundos. No total 4 segundos serao passados ate que o codigo sera totalmente executado.
        console.log("Executando Callback...")
        
        setTimeout(function() { //Uma terceira callback... Sera executada apos 6 segundos.
            console.log("Executando Callback...")
        }, 2000)
    }, 2000)  
}, 2000) */

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Executando Promise....")
            resolve() //O valor que estara presente ao chamar o .then sempre estara aqui no parametro do resolve.
        }, tempo)
    })
}


esperarPor() //Uma enorme diferenca usando promises para o exemplo mais acima usando callbacks. Para chamar uma promise dentro da outra, basta chamar a propria funcao que a instanciou que tera exatamente o mesmo efeito que o exemplo mais acima, com o callback hell.
    .then(() => esperarPor()) //Aqui usando arrow function na funcao esperarPor passando 5 segundos como parametro.
    .then(esperarPor) //Aqui apenas chamando a funcao sem passar parametros, ou seja, 2 segundos que foi o padrao da variavel "tempo".

    