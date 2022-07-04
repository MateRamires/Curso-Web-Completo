Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++){ //prototye.forEach2 traduziria para aprovados.forEach2 (aprovados esta chamando a funcao forEach que pertence a ele) ou seja, o this referencia o proprio aprovados.
        callback(this[i], i, this);
    }
}


const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"]

aprovados.forEach2(function(nome, indice) { 
    console.log(`${indice + 1}) ${nome}`)
})