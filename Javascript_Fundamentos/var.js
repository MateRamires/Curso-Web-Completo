{
    {
        {
            {
                var teste = "Testando";
            }
        }
    }
}
console.log(teste); //A variavel teste (definida por var) funciona fora do escopo de onde ela foi criada, ou seja, se uma variavel for criada dentro dum bloco if por exemplo, ela podera ser usada fora do bloco tambem. Ela nao deixa de existir.


function funcaoTeste()
{
    var local = 123;
}

funcaoTeste();
//console.log(local); Porem, nesse caso dara um erro, pois a variavel local foi criada dentro de uma funcao, ai nesse caso, a variavel so vale dentro do escopo da funcao.

//Obs: Eh recomendado a criacao de variaveis nao estando no escopo global, pois, qualquer sobrescrita de uma variavel global vai gerar problemas no programa, por exemplo uma variavel global A sendo criado na linha 2 e outra variavel global A sendo criada na linha 5300 vai gerar um conflito.


var numero = 1;

{
    var numero = 2;
    console.log("Dentro do bloco = " + numero);
}

console.log("Fora do bloco = " + numero); //Nesse caso tanto fora quanto dentro do bloco de codigo, o valor da variavel numero sera 2, pois, como a variavel numero foi alterada dentro de um bloco de codigo que NAO eh uma funcao, entao o valor dessa alteracao permanece mesmo fora do bloco de codigo.





