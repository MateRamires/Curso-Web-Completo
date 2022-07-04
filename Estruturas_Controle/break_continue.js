const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums){
    if(x == 5){
        break; //Break ira "quebrar" o bloco for, e saira dele.
    } 
    console.log("Indice " + x + ": " + nums[x]);
}

console.log("")

for (let y in nums){
    if(y == 5){
        continue; //O continue "quebrara" apenas a repeticao atual, entao quando o indice for 5, ele ira pular o resto do codigo abaixo do if, e pulara pro indice 6, onde o for ira continuar normal ate o final (10).
    }
    console.log("Indice " + y + ": " + nums[y]);

}