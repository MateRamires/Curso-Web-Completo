console.log("Ex 1")
function matematicas(n1, n2){
    console.log(`Soma: ${n1 + n2}`)
    console.log(`Subtracao: ${n1 - n2}`)
    console.log(`Divisao: ${n1 / n2}`)
    console.log(`Multiplicacao: ${n1 * n2}`)

}
matematicas(8,2);


console.log("Ex 2")
function triangulo(l1,l2,l3) {
    if(l1 == l2 && l2 == l3) {
        console.log("O triangulo eh Equilatero.")
    }
    else if(l1 == l2 || l2 == l3 || l1 == l3) {
        console.log("O triangulo eh Isoceles.")
    }
    else if(l1 != l2 && l2 != l3) {
        console.log("O triangulo eh Escaleno.")
    }
}
triangulo(1,5,32)


console.log("Ex 3")
function potencia(base, expoente) {
    //return Math.pow(base, expoente)
    return base ** expoente
}
console.log(potencia(3,3));


console.log("Ex 4")
function divisao(dividendo, divisor) { 
    var resultado = dividendo / divisor;
    resultado = resultado.toFixed(2);
    console.log(`O resultado da divisao eh ${resultado}`)
    console.log(`O resto da divisao eh ${dividendo % divisor}`)
}
divisao(5,3)


console.log("Ex 5")
function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}
formatarValorDecimal(0.1 + 0.2)


console.log("Ex 6")
function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}
console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));


console.log("Ex 7")
function bhaskara(ax2,bx,c) { 
    var resultado = []
    delta = (bx * bx) - (4 * ax2 * c);
    if(delta < 0){
        return "Delta eh negativo";
    }
    else{
        let x1 = (-bx + Math.sqrt(delta))/(2*ax2)
        let x2 = (-bx - Math.sqrt(delta))/(2*ax2)
        resultado.push(x1)
        resultado.push(x2)
        return resultado;
    }
}
console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))


console.log("Ex 8")
function basquete(pontuacoes) {
    var ArrayPontuacoes = pontuacoes.split(" ");
    var resultado = []

    var maiorPontuacao = ArrayPontuacoes[0];
    var recordes = 0;

    let piorPartida = ArrayPontuacoes[0];
    let valorPiorPartida = 0;

    for(let i = 0; i < ArrayPontuacoes.length; i++) {

        if(ArrayPontuacoes[i] > maiorPontuacao){
            maiorPontuacao = ArrayPontuacoes[i];
            recordes += 1;
        }

        if(ArrayPontuacoes[i] < piorPartida) {
            piorPartida = ArrayPontuacoes[i]
            valorPiorPartida = i + 1;
        }

    }

    resultado.push(recordes);
    resultado.push(valorPiorPartida);
    return resultado;
}
console.log(basquete("30 40 25 50 58 5 15 20"));


console.log("Ex 9")
function classificaAluno(nota) {
    if(nota < 38) {
        return "Voce foi reprovado!"
    }
    else
    {
        if(nota % 5 > 2){
            return nota + (5 - (nota % 5))
        }
        else {
            return nota
        }
    }
}
console.log(classificaAluno(100))
console.log(classificaAluno(30))
console.log(classificaAluno(38))
console.log(classificaAluno(88))
console.log(classificaAluno(61))


console.log("Ex 10")
function divisivel(numero){
    if(numero % 3 == 0){
        return true;
    }
    else {
        return false;
    }
}
console.log(divisivel(9));