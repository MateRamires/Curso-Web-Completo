// IIEF -> Immediately Invoked Function Expression (Ou seja, a funcao eh invocada automaticamente na execucao do codigo)

(function() {
    console.log("Sera executado na hora!");
    console.log("Foge do escopo mais abrangente!") //Tudo que for definido aqui, estara dentro do contexto dessa funcao apenas. Ou seja, fugira do contexto global, inclusive as possiveis variaveis e constantes criadas dentro dessa funcao.

})() //A funcao deve estar envolvida por um paraenteses, e ao final dela, devera-se colocar outro parenteses, esse eh o padrao para funcoes IIEF.


