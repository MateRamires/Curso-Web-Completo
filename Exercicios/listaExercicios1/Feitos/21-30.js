console.log("Ex 21")
function convenio(idade){
    var ValorASerPago = 100;

    if(idade >= 0 && idade < 10){
        return ValorASerPago += 80;
    }
    else if(idade >= 10 && idade <= 30){
        return ValorASerPago += 50;
    }
    else if(idade > 30 && idade <= 60){
        return ValorASerPago += 95;
    }
    else if(idade > 60 && idade<=130){
        return ValorASerPago += 130;
    }
    else{
        return "Idade invalida!"
    }
}
console.log(`Valor a ser pago: ${convenio(24)}`)


console.log("Ex 22")
function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mes Invalido'
    }
}

console.log(calcularValor(4, 100))


console.log("Ex 23")
function verificarSituacaoAluno(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)
    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Codigo do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)

}
verificarSituacaoAluno(123, 2.5, 10, 2)


console.log("Ex 24")
let i = 1;
while(i<=11){
    console.log("Hello World");
    i++;
}


console.log("Ex 25")
i = 1;
while(i<=10){
    console.log(i);
    i++
}


console.log("Ex 26")
i = 1;
while(i<=10){
    if(i % 2 == 0){
        console.log(i);
    }
    i++
}


console.log("Ex 27")
function calcularAltura(altura1, taxa1, altura2, taxa2) {
    var anos = 0;
    if(altura2 > altura1){
        while(altura1 < altura2){
        altura1 += taxa1;
        altura2 += taxa2;
        anos += 1;
        }
    }
    else if(altura1 > altura2){
        while(altura2 < altura1){
            altura1 += taxa1;
            altura2 += taxa2;
            anos += 1;
        }
    }
   return anos
}
console.log(calcularAltura(1.35, 0.01, 1.20, 0.03))


console.log("Ex 28")
function paresImpares(numeros){
    var numerosPares = [];
    var numerosImpares = [];
    for(var i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 == 0 ){
            numerosPares.push(numeros[i])
        }
        else{
            numerosImpares.push(numeros[i])
        }
    }
    console.log(`Numeros pares: ${numerosPares} \nNumeros impares: ${numerosImpares}`)
} 
numeros = [20, 30, 21, 1, 12, 0, 2, 4, 3]
paresImpares(numeros)


console.log("Ex 29")
function intervalo10a20(numeros){
    let numerosDentro = 0;
    let numerosFora = 0;
    for(var i = 0; i < numeros.length; i++){
        if(numeros[i] >= 10 && numeros[i] <= 20){
            numerosDentro++
        }
        else{
            numerosFora++
        }
    }
    console.log(`Numeros dentro: ${numerosDentro} \nNumeros fora: ${numerosFora}`)
}
numeros = [20, 30, 21, 1, 12, 0, 2, 4, 3, 13, 17];
intervalo10a20(numeros);


console.log("Ex 30")
function maiorMenor(numerosInteiros){
    let menor = numerosInteiros[0];
    let maior = numerosInteiros[0];
    for(let i = 0; i < numerosInteiros.length; i++){
        if(numerosInteiros[i] > maior){
            maior = numerosInteiros[i];
        }
        else if(numerosInteiros[i] < menor){
            menor = numerosInteiros[i];
        }
    }
    
    console.log(`O maior numero do vetor foi: ${maior}, e o menor foi: ${menor} `)
}
numeros = [20, 30, 21, 1, 12, 0, 2, 4, 3, 13, 17, 32];
maiorMenor(numeros)
