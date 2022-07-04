const prod1 = {} //Declaracao de um objeto eh por meio de chaves.
prod1.nome = "Celular Ultra Omega"; //Criacao dinamica do atributo nome.
prod1.preco = 4998.99;
prod1['Desconto Legal'] = 0.40; //Outra maneira de criar atributos, mas evitar espacos neles.

console.log(prod1);

const prod2 =  //Essa eh outra maneira de criar um objeto e seus atributos.
{
    nome: 'Camisa Polo',
    Preco: 75.99,
    cores: {  //Voce pode criar objeto dentro de objetos tambem.
        verde: true,
        azul: false
    }
};

console.log(prod2);