const nums = [1,2,3,4,5]

// For com proposito
let resultado = nums.map(function(e){ //O map nao transforma o array atual, por isso deve se atribuir um novo array ao resultado que o map ira gerar.
    return e * 2
})
console.log(resultado, nums) //nums continua o mesmo.

const soma10 = e => e + 10 //Arrow function tem retorno implicito
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`


resultado = nums.map(soma10).map(triplo).map(paraDinheiro) //Pode se fazer a chamada de varios maps.
console.log(resultado)
