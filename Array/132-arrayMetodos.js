const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]
pilotos.pop() // Remove o ultimo elemento do array.
console.log(pilotos)

pilotos.push("Verstappen") // Adiciona um elemento ao array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift("Hamilton") // Adiciona um elemento a primeira posicao do array.
console.log(pilotos)


// Adicionar elementos com o splice
pilotos.splice(2, 0, "Botas", "Massa")
console.log(pilotos)

// Remover elementos com o splice
pilotos.splice(3, 1)
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2) // Cria um novo array apartir da posicao passada.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // O segundo parametro desse metodo, seria ate os elementos serao tirados de um array (do elemento 1 ao 4 nesse caso). So que o ultimo elemento (4) nao entra, apenas um antes dele.
console.log(algunsPilotos2)




