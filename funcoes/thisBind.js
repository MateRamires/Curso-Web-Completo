const pessoa = {
    saudacao: "bom dia",
    falar() {
        console.log(this.saudacao) //this esta chamando o atributo saudacao cujo o objeto "pessoa" eh o dono. Sem o this, nao iria funcionar.
    }
}

pessoa.falar()

const falar = pessoa.falar; 
falar() //Nesse caso ira gerar erro, pois o metodo "falar" agora pertence a constante "falar" e atravez do this, ele tenta buscar o atributo saudacao DENTRO da constante "falar" ja que ela eh a "dona" do metodo agora.

const falarDePessoa = pessoa.falar.bind(pessoa); //Para resolver o problema, basta usar o bind e especificar o objeto em que sera "resolvido" o this. Nesse caso, o objeto seria o "pessoa".
falarDePessoa()


//Outra maneira de referenciar o this correto
function pessoa2(){
    this.idade = 0;

    const self = this //Variavel self contem o this que referencia pessoa2, podendo assim, usar o self para referenciar o this da forma correta na funcao abaixo.
    setInterval(function() { 
        self.idade++;
        console.log(self.idade);
     }/*.bind(this)*/, 1000);
}

new pessoa2



