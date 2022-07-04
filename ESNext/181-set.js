//O set eh um conjunto nao indexado (nao tem indice como nos arrays "[0]"") que nao aceita repeticao.
const times = new Set()
times.add("Vasco")
times.add("Sao Paulo").add("Palmeiras").add("Corinthians")
times.add("Flamengo")
times.add("Vasco") //Elemento repetido nao sera adicionado, sera ignorado.

console.log(times)
console.log(times.size)
console.log(times.has("Vasco"))
times.delete("Flamengo")
console.log(times.has("Flamengo"))

//Forma diferente de criar um Set, atraves de um array e passando como parametro esse array ao new Set(<array>).
const nomes = ["Raquel", "Bruno", "Julia", "Bruno"] //As repeticoes novamente serao excluidas do Set ao instancia-lo.
const nomesSet = new Set(nomes)
console.log(nomesSet)