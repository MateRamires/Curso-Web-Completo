function ispalindrome(palavra){

    let novafrase = palavra.split('')

    palavra = palavra.split('')
    let fraseInvertida = palavra.reverse()
    
    var soma = 0;
    for(let i = 0; i < novafrase.length; i++){
        if(novafrase[i] == fraseInvertida[i]){
            console.log("1")
            soma++
        }else{
            break
        }
    }

    if(soma == novafrase.length){
        return true;
    }
    else{
        return false;
    }


}

console.log(ispalindrome("aborr"))


function teste(){
    let str = "abc"
    let array = str.split('')
    let array2 = [...array] //Essa eh a forma de copiar o conteudo de um array pro outro, ja que ele eh do tipo que referencia. Existem oturas formas tambem, como usar array.splice().
    array2[0] = "t"
    console.log(array)
    console.log(array2)
}

teste()

function calcularMaiorNumero(){
    let arrayNumeros = [6,1,45,23,3]

    let num = 2

    let maiorNumero = arrayNumeros[0]

    for (let i = 0; i < arrayNumeros.length; i++) {
        if(arrayNumeros[i] > maiorNumero){
            maiorNumero = arrayNumeros[i]
        }
    }

    let aux = maiorNumero

    for (let i = 0; i < num; i++) {
        aux += 1
        maiorNumero += aux 
    }

    console.log(maiorNumero)

}

calcularMaiorNumero()



function empregado(title){
    var title = title
}