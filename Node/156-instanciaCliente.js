const contadorA = require('./156-instanciaUnica')
const contadorB = require('./156-instanciaUnica')

const contadorC = require('./156-instanciaNova')() //por instanciaNova requerer a invocacao da funcao factory para criar o objeto, eh necessario invocar essa funcao com o '()' ao final do require.
const contadorD = require('./156-instanciaNova')()


contadorA.inc()
contadorA.inc()
console.log(contadorB.valor, contadorA.valor) //como o node faz cache dos modulos, eu posso incrementar o modulo 'instanciaUnica' com o contadorA e depois pedir o valor de contadorB (que tambem vem do instanciaUnica) e ele tera o valor incrementado.


contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) //A cada chamada do modulo "instanciaNova" eh criado um novo objeto por causa da funcao Factory presente dentro do modulo. Ou seja, a cada variavel que ira requerer o modulo instanciaNova, sera criado um novo objeto independente.


