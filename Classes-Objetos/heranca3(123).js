const pai = {nome: "pedro", corCabelo: "preto"}
const filha1 = Object.create(pai) //No metodo create, eh passado como parametro a classe prototype (pai) ou null caso nao tenha nenhum objeto prototype.

filha1.nome = "Ana"
console.log(filha1.corCabelo)
console.log(filha1.nome)

const filha2 = Object.create(pai, {
    nome: {value: "Beatriz", writable: false, enumerable: true}
}) //Como segundo parametro do metodo create, podem ser criados novos atributos (assim como a funcao defineProperty).

console.log(filha2.nome)
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) //Apenas lista as chaves locais (criadas dentro do objeto, nao as que pertecem a classe prototype).
console.log(Object.keys(filha2))

//Maneira de percorrer todos os atributos de um objeto, incluindo dos atributos vindos da classe prototype (pai).
for(let key in filha2){
    filha2.hasOwnProperty(key) ?      //hasOwnProperty returna true caso a propriedade analisada pertenca ao objeto "filha2", no caso de nome, pertence, e no caso de corCabelo, nao pertence, retornando false.
        console.log(`Pertence a filha: ${key}`) : console.log(`Por heranca: ${key}`)
}
