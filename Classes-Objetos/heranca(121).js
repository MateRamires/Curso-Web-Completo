const ferrari = {
    modelo: "F40",
    velMax: 324
}

const volvo = {
    modelo: "V40",
    velMax: 200
}

console.log(ferrari.__proto__) //__proto__ mostra o objeto pai do objeto atual. Que nesse caso eh o prototype padrao do JS (um objeto sem nada).
console.log(ferrari.__proto__ === Object.prototype) //Todos os objetos por padrao apontam para Object.prototype
console.log(volvo.__proto__ === Object.prototype) 

console.log(Object.prototype.__proto__) //Agora, o proprio Object.prototype nao possui um outro prototype.

function meuObjeto(){}
console.log(typeof Object, typeof meuObjeto)


