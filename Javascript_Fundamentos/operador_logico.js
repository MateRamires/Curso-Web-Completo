function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)
    const comprarTv32 = trabalho1 != trabalho2; //Ou exclusivo (aceita apenas falso e verdadeiro ou verdadeiro e falso).
    const manterSaudavel = !comprarSorvete //Operador Unario
    return { comprarSorvete, comprarTv32, comprarTv50, manterSaudavel} //Para retornar mais de 1 valor, foi criado um objeto. Porem, a forma comum de criar um objeto seria: chave: valor, chave: valor. Mas vc tbm pode nao especificar o nome da chave e retornar apenas o valor, que o JS ira criar uma chave com o mesmo nome do valor.
}


console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))


//Curiosidade de operador unario
let num1 = 1
let num2 = 2
console.log(++num1 === num2--) //Aqui dara verdadeiro pois o ++ antes de num1 significa que sera atribuido + 1 ao num1 ANTES da comparacao, e -- depois do num2, significa que sera atribuido DEPOIS da comparacao, ou seja, os 2 ficam com o valor de 2.
//Essa eh uma sentenca complexa e nao recomendada a ser usada em um projeto real.


//Operador ternario
const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado";

console.log(resultado(8));
console.log(resultado(5));




