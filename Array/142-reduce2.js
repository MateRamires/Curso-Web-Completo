const alunos = [
    {nome: "Joao", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: true},
    {nome: "Ana", nota: 8.7, bolsista: true},
]

// Desafio 1: todos os alunos bolsistas? (Vai dar falso)
const todosBolsistas = (resultado, bolsista) => resultado && bolsista //Se o acumulador E atual forem true, entao retorna true, caso algum dos dois de false, ele retorna false.
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


// Desafio 2: Algum aluno eh bolsista? (Vai dar true)
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))