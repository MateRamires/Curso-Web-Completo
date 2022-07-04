function soma() {
    let soma = 0;
    for(i in arguments){
        soma += arguments[i]; 
    }

    return soma;
}

console.log(soma(1, 4, 5, 6, 8, 2, 4, 5, 6)); //A funcao soma pode somar indeterminados numeros. O uso do for in com arguments, permite isso.
console.log(soma("Ola ", "eu" + " sou" + " Matheus")); //Tambem pode usar a soma para concatenar Strings.

