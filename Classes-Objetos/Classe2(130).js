 //Prototypes em classes. (extends)
class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = "Professor"){
        super(sobrenome) //super ira chamar o construtor da classe pai (no caso a classe Avo), e nesse caso, passara o sobrenome que chegou atravez do parametro.
        this.profissao = profissao
    }
} 

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)