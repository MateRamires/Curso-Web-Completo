function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log("Valor acima do permitido: " + area + "m2");
    }
    else{
        return area;
    }
}


console.log(area(2, 3));
console.log(area(2));
console.log(area());
console.log(area(4, 2, 1, 4, 5, 6));
console.log(area(5, 5)); //Ele ira imprimir o valor acima do permitido e tambem retornara undefined, pois nesse caso nao tem retorno. Ele apenas teria se a area fosse menor que 20.


