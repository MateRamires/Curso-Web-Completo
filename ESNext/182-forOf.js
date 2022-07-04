for(let letra of "Cod3r") {
    console.log(letra) //for of percorreu uma string nesse caso, e mostrou letra por letra.
}
for(let i in "Cod3r"){
    console.log(i) //Essa eh a diferenca do for of do for in. No for in, ele imprime apenas os indices e nao os proprios valores em si (Ex: [0] = C, [1] = o ...)
}
console.log()


const assuntosEcma = ["Map", "Set", "Promise"]

for(let assunto of assuntosEcma){
    console.log(assunto) //O mesmo vale para arrays, o for of vai imprimir todos os valores do array e nao seus indices como seria no caso do for in.
}
console.log()


const assuntosMap = new Map([
    ["Map", { abordado: true}],
    ["Set", { abordado: true}],
    ["Promisse", { abordado: false}]
])

for (let assunto of assuntosMap){
    console.log(assunto) //Ira imprimir os arrays do Map com chave e valor. 
}

for(let chave of assuntosMap.keys()){
    console.log(chave) //Imprimira apenas as chaves do Map.
}

for(let valor of assuntosMap.values()) {
    console.log(valor) //Imprimira apenas os valores
}

for(let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl) //Recebera a chave e valor separadamente atraves de um destructuring.
}

const s = new Set(["a", "b", "c"])
for(let letra of s){
    console.log(letra) //Percorrendo um Set.
}