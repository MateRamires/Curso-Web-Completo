console.log(Math.ceil(6.1)); //Os objects console e Math mais o uso da notacao ponto, podem acessar funcoes dentro deles, como o log e o ceil.

const obj1 = {};
obj1.nome = "bola"; //Eh possivel criar um atributo novo de um objeto por meio da notacao ponto.
//obj1['nome'] = "bola2"; Outra maneira de criar um atributo a um objeto, porem, nao eh muito recomendado o uso desse tipo de notacao.
console.log(obj1);
console.log(obj1.nome); 


function obj(nome)
{
    this.nome = nome; //O this nesse caso meio que "cria" o atributo nome ao objeto que for criado via essa funcao. E nesse objeto sera atribuido ao atributo nome o valor de nome passado pelo parametro da funcao.
    this.exec = function() {   //Mesma coisa para essa funcao, o this.exec cria o metodo exec no objeto criado pela funcao obj.
        console.log("Executando funcao...");
    }
}

const obj2 = new obj("Mires");
console.log(obj2.nome);
const obj3 = new obj("Martin"); 
console.log(obj3.nome);
obj3.exec();

//Basicamente a notacao . permite acesso a atributos/metodos de um objeto e etc.



