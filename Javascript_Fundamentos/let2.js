const funcs = [];

for(let i = 0; i < 10; i++)
{
    funcs.push(function() 
    {
        console.log(i);
    });
}

funcs[2]();
funcs[8](); //Com o let ele ira funcionar, pois a variavel let i deixa de existir fora do bloco for, mas ela ja foi atribuida as funcoes da const funcs, dando o resultado esperado.