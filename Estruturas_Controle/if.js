function seForVerdade(valor)
{
    if(valor){
        console.log("É verdade..." + valor);
    }
}

//Resultados falsos
seForVerdade();
seForVerdade(null);
seForVerdade(undefined);
seForVerdade(NaN);
seForVerdade("");
seForVerdade(0);

//Resultados verdadeiros
seForVerdade(-1);
seForVerdade(5);
seForVerdade("Teste");
seForVerdade(" ");



Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim;
}

const imprimirResultado = function(nota){
    if (nota.entre(9, 10)){
        console.log("Quadro de Honra!")
    } else if(nota.entre(7, 8.99)){
        console.log("Aprovado!")
    } else if(nota.entre(4, 6.99)){
        console.log("Recuperacao!")
    } else if(nota.entre(0, 3.99)){
        console.log("Reprovado!")
    } else{
        console.log("Nota invalida!")
    }

    console.log("Fim.")
}

imprimirResultado(10);
imprimirResultado(7);
imprimirResultado(2);
imprimirResultado(-2);
imprimirResultado(14);





