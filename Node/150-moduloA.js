//Em node, um arquivo significa um modulo. E um modulo seria um conjunto de codigo que nao eh visivel de fora dele, 
//porem, se torna visivel exportando dados desse modulo para fora.


console.log(this) //O this atualmente eh um objeto vazio.

//Formas de Exportar dados.
this.ola = "Fala Pessoal"
exports.bemVindo = "Bem vindo ao Node!"
module.exports.ateLogo = "Ate o proximo exemplo!" 

//console.log(this) //Agora o this possui os 3 atributos criados acima.