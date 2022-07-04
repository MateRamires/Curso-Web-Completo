const funcs = [];

for(var i = 0; i < 10; i++)
{
    funcs.push(function() 
    {
        console.log(i);
    });
}

funcs[2]();
funcs[8](); //Esse eh um erro conhecido do JS, onde se voce atribui um variavel var i a uma funcao dentro de um bloco, ele sempre trara o resultado final do i (no caso 10, onde acabou o loop), e nao o 2 e o 8 respectivamente nas posicoes 2 e 8 do array.