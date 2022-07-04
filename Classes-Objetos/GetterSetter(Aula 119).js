const sequencia = {
    _valor: 1, //O underline, eh uma convencao de variaveis privadas (Nao eh obrigatorio, porem eh muito recomendado usar)

    get valor() { return this._valor++},

    set valor(valor) { 
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor) //o JS internamente entende que sequencia.valor ja esta chamando o metodo get valor().
sequencia.valor = 1000 //Nesse caso o JS tambem entende que esta sendo chamado o metodo set valor().
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 900 //Nesse caso, o if no setter nao eh ativado, entao a sequencia continua como estava antes (1002, 1003).
console.log(sequencia.valor, sequencia.valor)


