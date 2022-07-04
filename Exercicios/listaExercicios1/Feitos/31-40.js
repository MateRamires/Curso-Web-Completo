console.log("Ex 31")
function maiorMenor(numerosInteiros){
    let negativos = 0;
    for(let i = 0; i < numerosInteiros.length; i++){
        if(numerosInteiros[i] < 0){
            negativos++
        }
    }
    
    console.log(`A quantidade de numeros negativos encontrada no vetor foi: ${negativos}`)
}
numeros = [20, 30, 21, 1, 12, -2, -4, -2, 1, 5, -20];
maiorMenor(numeros)


console.log("Ex 32")
function mediaAritmetica(numeros){
    let soma = 0
    let quantNumeros = 0;
    for(let i = 0; i < numeros.length; i++){
        soma += numeros[i];
        quantNumeros += 1;
    }
    let resultado = soma / quantNumeros;
    console.log(`O resultado da media aritmetica foi: ${resultado}`)
}
numeros = [20, 30, 21, 1, 12, -2, -4, -2, 1, 5];
mediaAritmetica(numeros)


console.log("Ex 33")
function concatenar(...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}
vetorInteiro = [1, 2, 4, 5,]
vetorString = ["Oi", "Eu", "Sou", "Matheus"]
vetorDouble = [1.3, 5.3, 2.1, 5.3]

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))


console.log("Ex 34")
function AnalisarString(string1, string2){

}


console.log("Ex 35")
function adicionarNaPilha(vetorPilha, vetorAdiciona){
    for(let i = 0; i < vetorAdiciona.length; i++){
        vetorPilha.push(vetorAdiciona[i]);
    }
    console.log("Resultado: " + vetorPilha);
}
vetor1 = [1,2,3,4,5]
vetor2 = [6,7,8,9,10]
adicionarNaPilha(vetor1, vetor2)


console.log("Ex 36")
function multiplicacao(vetorNumeros, numero){
    let resultado = [];
    for(let i = 0; i < vetorNumeros.length; i++){
        resultado.push(vetorNumeros[i] * numero);
    }

    return resultado;
}

function multiplicacao2(vetorNumeros, numero){
    let resultado = [];
    for(let i = 0; i < vetorNumeros.length; i++){
        if(vetorNumeros[i] > 5){
            resultado.push(vetorNumeros[i] * numero);
        }
    }
    return resultado;
}
vetorNumeros = [6, 1, 3, 10, 25, 2, 6, 4];
console.log(multiplicacao(vetorNumeros, 2))
console.log(multiplicacao2(vetorNumeros, 2))


console.log("Ex 37")
function pA (n, a1, r) {
    for (let i = 0; i < n; i++) {
        console.log(a1 + r*i)
    }
    console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2)    
}

function pG (n, a1, r) {
    //console.log(a1)
    for(let i = 0; i < n; i++){
        console.log(a1*(r**i))
    }
    console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))
}

pA(10, 10, 15)
console.log('----------------');
pG(10, 5, 3)


console.log("Ex 38")
function impares(inicio = 0, fim = 100){
    if(inicio > fim){
        let aux;
        aux = inicio;
        inicio = fim;
        fim = aux;
    }

    for(let i = inicio; i <= fim; i++){
        if(i % 2 != 0){
            console.log(i)
        }
    }
}
impares(40, 20)


console.log("Ex 39")
function trocarElementos(array1, array2){
    if (array1.length == array2.length) {
        for(let i = 0; i < array1.length; i ++){
            let aux = array1[i];
            array1[i] = array2[i];
            array2[i] = aux;
        }
    } else{
        console.log("Arrays com tamanhos diferentes")
    }

    console.log('Novo vetor A: ' + array1)
    console.log('Novo vetor B: ' + array2)
}
vetor1 = [1,2,3,4,5]
vetor2 = [6,7,8,9,10]
trocarElementos(vetor1, vetor2)


console.log("Ex 40")
