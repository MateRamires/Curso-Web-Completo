require('./157-global') //Quando um atributo novo eh adicionado no global em um modulo, para importar esse modulo em questao, nao ha necessidade de alocar esse require a uma variavel, como eh feito ao usar "module.exports".

console.log(minhaApp.saudacao()) //Nesse caso, nao eh preciso nem usar "global.minhaApp".

minhaApp.nome = "Eitcha!" //Voce pode mudar atributos desse objeto tambem. (Mas como foi usado object.freeze na instancia do objeto em "global.js", esse comando nao ira funcionar).
console.log(minhaApp.nome)
