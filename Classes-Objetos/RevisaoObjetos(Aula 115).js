//Colecao dinamica de pares chaves/valor.
const produto = new Object //Forma de criar objetos.
produto.nome = "Cadeira" //Forma dinamica de criar e adicionar valor a atributos ao objeto.
produto['marca do produto'] = "Generica"; //Outra maneira dinamica de criar atributos num objeto. (Nao muito recomendado)
produto.preco = 220;

console.log(produto)
delete produto.preco 
delete produto['marca do produto'] //Forma de deletar atributos de um objeto.
console.log(produto)


const carro = {
    modelo : "a4",
    valor: 89000,
    proprietario: {
        nome: "Raul",
        idade: 56,
        endereco: {
            logradouro: "Rua ABC",
            numero: 123
        }
    },
    condutores: [{
        nome: "Junior",
        idade: 19
    }, {
        nome: "Ana",
        idade: 42   
    }],
    calcularValorSeguro: function(){
        // ...
    }

}

carro.proprietario.endereco.numero = 300; //Adicionando o atributo numero ao objeto endereco que faz parte do objeto proprietario que faz parte do objeto carro. 
carro["proprietario"]["endereco"]["logradouro"] = "Av Gigante" //Acessar de forma diferente.
console.log(carro)

delete carro.condutores //Deletando elementos.
console.log(carro)
console.log(carro.CoisaQueNaoExiste) //Aqui nao ira gerar erro, pois posso acessar qualquer coisa dentro do objeto, mesmo que ela nao exista. Apenas retornara undefined como resposta.
//console.log(carro.CoisaQueNaoExiste.OutraCoisaQueNaoExiste) Ja aqui ira gerar erro, pois nao posso acessar algo de algo que ja eh undefined.


