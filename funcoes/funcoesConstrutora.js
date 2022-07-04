function Carro(velocidadeMaxima = 200, delta = 5) {  //Em javascript, uma funcao pode funcionar como uma classe em outras linguagens.
    //Atributo privado.
    let velocidadeAtual = 0;

    //metodo publico criado a partir da palavra chave "this."
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual;
    }
} 


const uno = new Carro //Instancia de um objeto usando a funcao Carro como "classe".
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro); //Uma funcao.
console.log(typeof ferrari); //Um objeto.
