const moduloA = require('./150-moduloA')  //Forma de importar (. significa que esta na mesma pasta e depois o proprio nome do arquivo que voce quer importar).
const moduloB = require('./150-moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA) //O objeto que foi criado em moduloA. (Ou seja, tanto "this." ou "exports." quando usados, criam um novo atributo chave-valor no objeto).

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)


