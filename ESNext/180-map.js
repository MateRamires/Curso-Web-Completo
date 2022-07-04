const tecnologias = new Map() //O map eh um "substituto" dos objetos, nele voce pode colocar funcoes, numeros e ate objetos como chaves e etc.
tecnologias.set('React', {framework: false}) //Essa eh a forma de setar um novo atributo ao Map. Estamos colocando a chave "React" com o valor de um objeto.
tecnologias.set('Angular', {framework: true})

console.log(tecnologias)
console.log(tecnologias.React) //Essa eh a forma incorreta de se pegar o valor de um atributo em Map. Isso apenas retornara undefined.
console.log(tecnologias.get("React")) //Essa eh a forma correta de se retornar um atributo do Map.
console.log(tecnologias.get("React").framework, "\n") //Como framework eh um objeto/valor, eu posso fazer desse jeito para receber apenas o valor false.


//Forma diferente de criar um Map, atraves de uma matriz com varios arrays dentro do array principal.
const chavesVariadas = new Map([
    [function(){}, "Funcao"],
    [{}, "Objeto"],
    [123, "Numero"],
])

console.log(chavesVariadas)
chavesVariadas.forEach((valor, chave) =>{
    console.log(chave, valor)
})
console.log("")

console.log(chavesVariadas.has(123)) //metodo que permite ver se uma chave esta presente no Map.
chavesVariadas.delete(123) //Deleta um item dentro do Map.
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) //Atributo que mostra quantos elementos estao presentes dentro do Map.

chavesVariadas.set(123, "a")
chavesVariadas.set(123, "b") //Nesse caso nao sera criada um segundo atributo com chave "123", e sim, o atributo original "123" tera o valor substituido por "b".
console.log(chavesVariadas)
