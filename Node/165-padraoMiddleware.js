// Middleware Pattern (chain of responsability) - O padrao middleware em suma divide acoes de uma determinada funcionalidade, e deixa a chamada de uma funcao para a outra de forma implicita, para que o proprio developer possa decidir qual funcao sera primeira ou segunda, etc.
const passo1 = (ctx, next) => {
    ctx.valor1 = "mid1"
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = "mid2"
    next()
}

const passo3 = ctx => ctx.valor3 = "mid3"


const exec = (ctx, ...middlewares) => {  //Eh passado o ctx, e as funcoes middlewares que no caso seram as 3 funcoes criadas acima.
    const execPasso = indice => {
        middlewares && indice < middlewares.length && //Ele vai verificar se o array middlewares foi setado E se o indice passado eh menor que o tamanho do array (pois se indice for maior que o tamanho do array, nao faria sentido continuar rodando).
            middlewares[indice](ctx, () => execPasso(indice + 1)) //Se os 2 parametros acima forem verdadeiros, ele ira rodar essa linha.
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3) //Posso inverter a ordem do passo1 e passo2 (do passo3 nao, pois ele nao possui o next())
console.log(ctx)