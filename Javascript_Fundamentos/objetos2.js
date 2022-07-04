console.log(typeof Object); //Objeto em si eh uma funcao.
console.log(typeof new Object());  //Mas a nova instancia de um objeto, ai sim se torna um objeto.


const Cliente = function() {}
console.log(typeof Cliente); 
console.log(typeof new Cliente); //Mesma coisa para esse exemplo.

class Produto {} //Produto aqui eh uma funcao, o class antes do nome eh apenas um detalhe de sintaxe.
console.log(typeof Produto); 
console.log(typeof new Produto()); //E mesma coisa para esse exemplo tambem.
//Em JS a funcao praticamente faz o papel da classe, dando o "molde" de algo, assim como as classes.


