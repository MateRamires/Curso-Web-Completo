//Destructuring em objetos
const pessoa = {
    nome: "ana",
    idade: 5,
    endereco: {
        logradouro: "rua abc",
        numero: 1000
    }
};

const { nome, idade} = pessoa; //Tire de dentro de um objeto, os atributos nome e idade, e nesse caso, o objeto sendo pessoa.
console.log(nome, idade); //Essa eh uma forma de tirar varios atributos de dentro de um objeto.

const {nome: n, idade: i} = pessoa; //Essa eh uma forma de dar um nome diferente as variaveis que serao extraidas de um objeto.
console.log(nome, idade);

const {sobrenome, bemHumorada = true} = pessoa; //Voce tambem pode passar um valor padrao para caso a variavel nao exista dentro do objeto.
console.log(sobrenome, bemHumorada);

const {endereco: {logradouro, numero, cep} } = pessoa; //Tambem pode passar valores de objetos dentro do objeto.
console.log(logradouro, numero, cep);

//const {conta: {ag, num} } = pessoa    Nao ha problema se uma variavel nao existir, ele apenas resultara como undefined, porem, se vc procurar um objeto e ele nao existir, ai o programa dara erro, como nesse caso que o objeto conta nao existe dentro de pessoa.
//console.log(ag, num)



//Destructuring em arrays
const [a] = [10]; //Na posicao a, ha o valor 10. Basicamente do lado esquerdo eh o operador de desestruturacao, que nesse caso nos nomeamos como "a" mas poderia ser qualquer outro nome, e do lado direito eh o array que ira passar o seu valor para a variavel "a".
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 2]; //n1 = 10 --- undefined = 7 (nesse caso como o 2 elemento foi pulado, entao o valor 7 sera atribuido a esse valor que foi pulado, sendo assim, o 7 sera atribuido a nada.) --- n3 = 9 --- undefined = 2 (Mesma coisa que ocorreu com o valor 7 na 2 posicao).
console.log(n1,n3,n5,n6);



//Destructuring em funcao usando objetos
function rand({ min = 0, max = 1000}){  //Basicamente no argumento dessa funcao esta um operador destructuring, entao ao chamar a funcao, basta passar como parametro um objeto que tenha min e max dentro dele.
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
};

const obj = {max: 50, min: 40}; //Um objeto com min e max dentro dele como atributos.
console.log(rand(obj));
console.log(rand({min: 975})); //Pode se passar um objeto ja criado, ou criar um objeto na propria chamada da funcao, como nesse exemplo.
//console.log(rand());   Caso voce nao passe nada, ele ira gerar um erro, pois vc NAO pode deixar de passar o objeto em si, voce so pode deixar de passar as variaveis dentro do objeto, que se nao tiverem valor padrao, darao valor undefined, mas nao causara erro no progrmama. 



//Destructuring em funcao usando arrays
function rand2( [min = 0, max = 1000] ){ 
    if(min > max) [min, max] = [max, min]; //min e max da esquerda sao as variaveis que foram desestruturadas do array na chamada da funcao, e o array da direita eh um novo array que esta sendo criado.
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand2([50, 40])); //Passando um array. Nesse caso, por ser um array, nao se pode especificar quem eh o minimo com min e maximo com max, mas sim, passar apenas os valores.
console.log(rand2([994])); //So passara o minimo nesse caso.
console.log(rand2([ ,40])); //So passara o maximo nesse caso.
console.log(rand2([])); //Passando um array vazio, a funcao ira entao apenas considerar os valores padroes que ja foram determinados.
//console.log(rand2()); assim como em objetos, se nao passar nada, ele tambem ira gerar um erro, entao eh necessario passar pelo menos um array sem nada, mas nao se pode nao passar absolutamente nada.

