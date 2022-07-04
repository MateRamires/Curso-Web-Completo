console.log("Ex 11")
function calcularAnoBissexto(ano) {
    if(ano <= 0){
        console.log("O ano eh invalido")
    }
    else if(ano % 400 == 0){
        console.log("O ano eh bissexto.")
    }
    else if(ano % 100 == 0){
        console.log("O ano nao eh bissexto.")
    }
    else if(ano % 4 == 0){
        console.log("O ano eh bissexto.")
    }
    else {
        console.log("O ano nao eh bissexto.")
    }
}
calcularAnoBissexto(100);
calcularAnoBissexto(400);
calcularAnoBissexto(2008);
calcularAnoBissexto(2500);


console.log("Ex 12")
function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))


console.log("Ex 13")
function verificarDia(dia){
    switch(dia){
        case 1:
        case 7:
            console.log("Hoje eh final de semana!")
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log("Hoje eh dia de semana!")
            break;
        default:
            console.log("Dia invalido!")
    }
}
verificarDia(1)
verificarDia(3)
verificarDia(7)
verificarDia(-1)


console.log("Ex 14")
function verificarFruta(fruta){
    switch(fruta){
        case "maca":
            console.log("Nao vendemos essa fruta aqui!")
            break;
        case "kiwi":
            console.log("Estamos com escassez de kiwis!")
            break;
        case "melancia":
            console.log("Aqui estao, sao 3 reais o quilo")
            break;
        default:
            console.log("Erro! opcao invalida!")
    }
}
verificarFruta("melancia")
verificarFruta("maca")
verificarFruta("kiwi")
verificarFruta("chorume")


console.log("Ex 15")
function escolherCarro (modelo) {
    switch (modelo) {
        case 'hatch':
            return 'Compra efetuada com sucesso.'
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que nao prefere este modelo?'
        default:
            return 'Nao trabalhamos com este tipo de automovel aqui.'
    }
}

console.log(escolherCarro('hatch'));
console.log(escolherCarro('motocicleta'));
console.log(escolherCarro('sedan'));
console.log(escolherCarro('caminhonete'));
console.log(escolherCarro('jetski'));

console.log("Ex 16")
function calculadora(n1, n2, operacao){
    switch(operacao){
        case "+":
            return n1 + n2;
            break;
        case "-":
            return n1 - n2;
            break;
        case "/":
            return n1 / n2;
            break;
        case "*":
            return n1 * n2;
            break;
        default:
            return "Tipo de operacao invalida!"
    }
}
console.log(calculadora(8,2,"+"))
console.log(calculadora(8,2,"-"))
console.log(calculadora(8,2,"/"))
console.log(calculadora(8,2,"*"))

console.log("Ex 17")
function aumentarSalario(salario, plano){
    switch(plano){
        case "A":
            return salario += (salario * 0.10);
            break;
        case "B":
            return salario += (salario * 0.15);
            break;
        case "C":
            return salario += (salario * 0.20);
            break;
        default:
            return "Plano invalido!"

    }
}
console.log(aumentarSalario(2000, "A"))
console.log(aumentarSalario(2000, "B"))
console.log(aumentarSalario(2000, "C"))


console.log("Ex 18")
function transformarNumero(n1){
    switch(n1){
        case 1:
            return "Um"
            break;
        case 2:
            return "Dois"
            break;
        case 3:
            return "Tres"
            break;
        case 4:
            return "Quatro"
            break;
        case 5:
            return "Cinco"
            break;
        case 6:
            return "Seis"
            break;
        case 7:
            return "Sete"
            break;
        case 8:
            return "Oito"
            break;
        case 9:
            return "Nove"
            break;
        case 10:
            return "Dez"
            break;
        default:
            return "Numero fora do intervalo!"
        
    }
}
console.log(transformarNumero(1))
console.log(transformarNumero(5))
console.log(transformarNumero(10))
console.log(transformarNumero(11))


console.log("Ex 19")
function cardapio(codigo, qntd){
    switch(codigo){
        case 100:
            return 3.00 * qntd;
            break;
        case 200:
            return 4.00 * qntd;
            break;
        case 300:
            return 5.50 * qntd;
            break;
        case 400:
            return 7.50 * qntd;
            break;
        case 500:
            return 3.50 * qntd;
            break;
        case 600:
            return 2.80 * qntd;
            break;
    }
}
console.log(cardapio(300, 3));


console.log("Ex 20")
function cedulas(valor){
    var resultado = [];
    var cedula100 = 0;
    var cedula50 = 0;
    var cedula10 = 0;
    var cedula5 = 0;
    var cedula1 = 0;

    cedula100 = Math.floor(valor / 100);
    valor = valor % 100;

    cedula50 = Math.floor(valor / 50);
    valor = valor % 50;
   
    cedula10 = Math.floor(valor / 10);
    valor = valor % 10;

    cedula5 = Math.floor(valor / 5);
    valor = valor % 5;

    cedula1 = Math.floor(valor / 1);
   
    resultado.push(cedula100);
    resultado.push(cedula50);
    resultado.push(cedula10);
    resultado.push(cedula5);
    resultado.push(cedula1);
    return resultado
}
console.log(cedulas(1238))
