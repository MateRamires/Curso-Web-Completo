// Operador ... rest(juntar)/spread(espalhar)

//Usar spread com objeto
const funcionario = {nome: "Maria", salario: 12348.99}
const clone = {ativo: true, ...funcionario} //...funcionario esta pegando todos os atributos do objeto funcionario e colocando/espalhando dentro no objeto clone.
console.log("Objeto funcionario:", funcionario, "\nObjeto Clone:", clone)


// Usar spread com array
const grupoA = ["Bruno", "Pedro", "Joca"]
const grupoB = ["Matheus", ...grupoA, "Mittens"]
console.log("Grupo A: ", grupoA, " \nGrupo B: ", grupoB)