console.log(typeof Array, typeof new Array, typeof []) //Array eh uma funcao, porem a instancia de um array, eh um objeto.

// Criando array atraves de new Array
let aprovados = new Array("Bia", "Carlos", "Ana")
console.log(aprovados)

// Criando array atraves da forma literal (mais recomendada).
aprovados = ["Bia", "Carlos", "Ana"]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //O quarto elemento nao existe, mas em JS nao dara erro, apenas dara undefined.

aprovados[3] = "Paulo" //Maneira de adicionar um elemento a um array.
console.log(aprovados[3])

aprovados.push("Matheus") // Maneira mais usual e recomendada de adicionar um elemento a um array
console.log(aprovados[4])

aprovados[9] = "Rafael" //Pode fazer isso, e os elementos que nao foram definidos vao existir, mas com valor undefined.
console.log(aprovados.length)
console.log(aprovados[8] === undefined) // Prova de que os indices anteriores ao indice 9 existem e que possuem valor undefined.
console.log(aprovados)

aprovados.sort() //Vai re-ordenar o array em ordem alfabetica. (Importante: esse metodo altera o array original, diferente de outros metodos que criam um novo array e mantem o array original em sua forma original).
console.log(aprovados) 

delete aprovados[1] //Excluira o elemento, e nao ira re-ordenar o array, pois agora na posicao 1, que foi excluida, tera apenas um undefined.
console.log(aprovados[1])
console.log(aprovados[2]) //Indice 2 se manteve como antes.

aprovados = ["Bia", "Carlos", "Ana"]
aprovados.splice(1, 1) // O primeiro argumento desse metodo eh o elemento cujo eu quero mexer, e o segundo sao o numero de elementos (dado partir do primeiro argumento) que eu quero excluir. (Nesse caso o 1 elemento eh "Carlos" e sera excluido apenas um elemento que eh o proprio e apenas o "Carlos").
console.log(aprovados)

aprovados = ["Bia", "Carlos", "Ana"]
aprovados.splice(1, 2, "Elemento1", "Elemento2") // Voce tambem pode adicionar elementos com o splice, nesse caso seram excluidos 2 elementos do array a partir do primeiro elemento, e por fim serao adicionados os "Elementos1" e "Elementos2" (Eh permitido pedir para o metodo excluir 0 elementos e adicionar N elementos, assim nada sera excluido e sera apenas adicionado novos elementos).
console.log(aprovados)




