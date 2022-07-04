module.exports = function(...nome){ //"..." tambem conhecido como rest operator, eh usado quando nao se sabe o numero exato de argumentos que serao enviados a funcao. (Obs: a variavel usada junto ao rest operator sempre eh um array).
    return nome.map(nome => `Boa semana ${nome}!`)
} 