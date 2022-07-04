// Funcao em JS é First-Class Object (Citizens) - Higher-Order Function.
//Isso significa que a funcao pode ser tratada como um dado, ou seja, pode ser passada como parametro de outra funcao, ou como retorno de uma funcao, etc.


//Criar de forma literal.
function fun1 () { }

//Armazenar em uma variavel.
const fun2 = function () { }

//Armazenar em um array.
const array = [function(a,b){return a+ b}, fun1, fun2]; //Pode se criar a funcao dentro do array, ou apenas passar o nome da funcao ja criada anteriormente no codigo.
console.log(array[0](2,3));

// Armazenar em um atributo de objeto.
const obj = {}
obj.falar = function(){return "Opa"}
console.log(obj.falar())

//Passar funcao como parametro.
function run(fun){
    fun();
}
run(function(){console.log("Executando...")});

//Uma funcao pode retonar/conter uma funcao
function soma(a,b) {
    return function(c) {
        console.log(a + b + c);
    }
}
soma(2, 3)(5);
const cincoMais = soma(2, 3) //Tambem pode se criar uma variavel que contem a funcao soma com os 2 parametros de soma ja setados.
cincoMais(4); //E ai nessa chamada vc esta passando o valor apenas do parametro da funcao no return, pois os valores dos parametros da funcao soma, ja tem um valor padrao (2, 3).


