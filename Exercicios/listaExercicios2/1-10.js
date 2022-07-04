console.log("Ex 1")
function concatena(text) {
    console.log(`Ola ${text}!`)
    console.log("Ola ".concat(text, " !"))
}
concatena("Matheus")


console.log("\nEx 2")
function retornaDias(idade){
    return idade * 365
}
console.log(retornaDias(19) + " dias")


console.log("\nEx 3")
function salario(horasTrab, salarioPorHora){
    return horasTrab * salarioPorHora
}
console.log("Salario igual a R$" + salario(150, 40.5))


console.log("\nEx 4")
function repetidor(valor, repeticoes){
    let arrayNovo = []
    for(let i = 0; i < repeticoes; i++){
        arrayNovo.push(valor);
    }
    return arrayNovo
}
console.log(repetidor("Codigo", 5))


console.log("\nEx 5")
function retornaMais(qntDeVezes){
    let novaString = "";
    for(let i = 0; i < qntDeVezes; i++){
        novaString = novaString.concat("+")
    }
    return novaString
}
console.log(retornaMais(10))


console.log("\nEx 6")
function retornaPriUlt(array){
    let arrayRes = []
    arrayRes.push(array.slice(0, 1))
    arrayRes.push(array.slice(-1))
    return arrayRes
}
let array = [4,5,1,4,6,7,"Coco", "Teste"]
console.log(retornaPriUlt(array))


console.log("\nEx 7")
function removerPropriedade(obj, propriedade){
    if(obj.hasOwnProperty(propriedade)){
        delete obj[propriedade]
    }
    else{
        console.log(`A propriedade: "${propriedade}" nao existe dentro do Objeto!`)
    }

    return obj
}
let obj = { a: 1, b: 2, c: "aborr"}
let novoObj = removerPropriedade(obj, "o")
console.log(novoObj)


console.log("\nEx 8")
function filtrarNumeros(array){
    return array.filter(Number)
}
array = [2, "teste", 4, 5, "bosta", 1, "peixe", 9]

console.log(filtrarNumeros(array))


console.log("\nEx 9")
function objetoParaArray(objeto){
    let arrayResultado = []
    for(let key in objeto){
        arrayResultado.push([key, objeto[key]])
    }
    return arrayResultado
}
var objetoTeste = { nome: "Bruno", profissao: "Cuzao"}
console.log(objetoParaArray(objetoTeste))


console.log("\nEx 10")
function receberSomenteOsParesDeIndicesPares(array){
    const filtrarPares = (p, p2) => p % 2 == 0 && p2 % 2 == 0
    return array.filter(filtrarPares)
}
array = [10, 20, 1, 3, 4, 8, 2]
console.log(receberSomenteOsParesDeIndicesPares(array))


console.log("\nEx 11")
function somaNumeros(array){
    return array.reduce((acumulador, atual) => {
        console.log(`acumulador: ${acumulador}, atual: ${atual}`) //Apenas para testes
        return acumulador + atual
    })
}
array = [10, 20, 15]
console.log(somaNumeros(array))

console.log("\nEx 12")
function calcularDespensas(arrayObjetos){
    let precoTotal = 0
    arrayObjetos.forEach(objeto => {
        precoTotal += objeto.preco
    })
    return precoTotal
}
let arrayDeObjetos = [{nome: "Jornal online", categoria: "Informação", preco: 89.99},
                      {nome: "Cinema", categoria: "Entretenimento", preco: 150}]
console.log(calcularDespensas(arrayDeObjetos))


console.log("\nEx 13")
function calcularMedia(arrayValores){
    let soma = 0
    for(let i = 0; i < arrayValores.length; i++) {
        soma += arrayValores[i]
    }
    return soma / arrayValores.length
}
let ArrayTeste = [10, 10, 10, 10, 10]
console.log(calcularMedia(ArrayTeste))


//Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
//deverá ser de duas casas decimais, arredondando se necessário.
console.log("\nEx 13")
function calcularAreaTriangulo(base, altura){
    return ((base * altura) / 2).toFixed(2)
}
console.log(calcularAreaTriangulo(7, 9))



console.log("\nEx 14")
function retornaMenorNumero(arrayNum){
    let menorNumero = arrayNum[0]
    arrayNum.forEach(n => {
        if(n < menorNumero){
            menorNumero = n
        }
    })
    return menorNumero
}
let arrayNovos = [3, 4, 1, -15, 20, -45, 10, 0]
console.log(retornaMenorNumero(arrayNovos))


console.log("\nEx 15")
function funcaoDaSorte(numero){
    if(numero < 1 && numero > 10) {
        console.log("Numero invalido! Apenas numeros de 1 a 10")
    }
    else {
        if (Math.floor(Math.random() * 11) == numero){
            return "O numero sorteado foi igual ao numero escolhido!"
        }
        else {
            return "O numero sorteado nao foi igual ao numero escolhido"
        }
    }
}


console.log("\nEx 16")
function contarPalavras(String){
    var a = String.split(" ")
    return a.length
}
let Str = "Eu tenho merda na cabeca e ovo no cerebro"
console.log(contarPalavras(Str))



console.log("\nEx 16")
function contarLetra(letra, String){
    let soma = 0
    let a = String.split("")
    a.forEach(char => {
        if(char == letra){
            soma += 1
        }
    })
    return soma
}
let Str = "Eu tenho cocO no proprio cerebro com ovos (Sim, ovos)"
console.log(contarLetra("o", Str))




console.log("\nEx Extra")
function contarTodosOsCaracteres(str) {
    var VarAux = str.split("");
    console.log(VarAux)
    var obj = {};
    VarAux.forEach((caracter) => {
      if(obj.hasOwnProperty(caracter)){
          obj[caracter] += 1
      }
      else{
          obj[caracter] = 1
      }
    });
    
    delete obj[" "]
    return obj;
}
console.log(contarTodosOsCaracteres('eu amo lixo com lixo'));




