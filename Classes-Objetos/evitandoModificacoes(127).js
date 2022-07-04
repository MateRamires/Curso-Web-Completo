// Object.preventExtensions - previne que o objeto seja extendido (previne a adicao de novos atributos ao objeto).
const produto = Object.preventExtensions({
    nome: "qualquer", preco: 1.99, tag: "Promocao"
})
console.log('Extensivel: ', Object.isExtensible(produto))

produto.nome = "Borracha" //Ele ira alterar o nome, sem problemas
produto.descricao = "Borracha escolar branca" //Porem, ele nao ira adicionar essa descricao, pois, nao se pode adicionar novos atributos.
delete produto.tag //Excluir tambem eh permitido.
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa) // Um objeto selado, nao consegue adicionar, nem excluir. Porem, eh permitido modificar atributos ja existentes.
console.log("Selado: ", Object.isSealed(pessoa))

pessoa.sobrenome = "Silva" // Nao vai funcionar.
delete pessoa.nome // Nao vai funcionar.
pessoa.idade = 28 // Esse sim ira funcionar.
console.log(pessoa)


// Object.freeze = Nao consegue alterar, adicionar e remover atributos do objeto.