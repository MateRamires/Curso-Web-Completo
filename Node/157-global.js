//console.log(global)

global.minhaApp = Object.freeze({ //Obs: Poderia ter sido criado sem Object.freeze, apenas foi usado essa funcao para nao poder alterar o nome de atributos.
    saudacao() {
        return "Estou em todos os Lugares!"
    },
    nome: "Sistemas systems"
})



