const alunos = [
    {nome: "Joao", nota: 7.9},
    {nome: "Maria", nota: 9.2}
]


// Abordagem Imperativa (Essa abordagem mostra de forma detalhada como vai chegar no resultado, isso as vezes pode nao ser tao interresante, pois ira consumir mais codigo que a aborgadem Declarativa).
let total1 = 0;
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//Abordagem Declarativa (A mais interresante) (A forma declarativa esta mais interresada no resultado, de que como vai chegar nesse resultado).
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

// select codigo, nome, email from clientes where ativo = 1 (Exemplo de Declarativo no SQL)
