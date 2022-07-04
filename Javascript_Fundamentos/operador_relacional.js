console.log("01)" , '1' == 1) //Nesse caso retornara true, pois dois == comparam apenas o valor, mesmo um sendo string e o outro number, os dois tem valores iguais.
console.log("02)", '1' === 1) //Ja nesse caso com os tres ===, ele compara o valor e o tipo, entao retornara false, ja que o valor eh igual mas os tipos sao diferentes.
console.log("03)", '3' != 3) //3 nao eh diferente de 3 e nesse caso, como nao compara os tipos, entao ele retornara false mesmo.
console.log("04)", '3' !== 3) //Ja aqui ele retornara true, pois ele compara se o valor eh igual e tambem se o tipo eh igual com o !==, e nesse caso, o tipo eh diferente.

const d1 = new Date(0) //Date passando 0 como argumento ira retornar o valor do dia 1 de janeiro de 1970, um padrao utilizado em muitas linguagens.
const d2 = new Date(0)

console.log("05)", d1 === d2)
console.log("06)", d1 == d2) //Nesses 2 casos, retornara false, pois como eh uma variavel de referencia, ele estara comparando o endereco de memoria, entao mesmo que os 2 sejam dates, ele compara apenas a referencia da memoria.
console.log("07)", d1.getTime() === d2.getTime()) //Nesse caso eh verdadeiro, pois ele compara o valor vindo da funcao getTime, que para ambos, sao iguais.

console.log("08)", undefined == null) //Undefined e null os dois nao valem nada, entao aqui ele retorna true
console.log("09)", undefined === null) //Agora aqui, ele retorna false, ja que undefined nao eh do mesmo tipo de null. Undefined eh do tipo undefined e null eh do tipo object.

