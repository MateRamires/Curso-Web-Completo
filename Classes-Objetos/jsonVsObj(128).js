//Objeto para JSON
const obj = {a: 1, b: 2, c: 3, soma(){ return a + b + c}}
console.log(JSON.stringify(obj)) //JSON so aceita dados, nao aceita funcoes.


//JSON para objeto
//console.log(JSON.parse("{a: 1, b: 2, c: 3 }")) Forma errada
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) Forma errada
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) //Essa eh a forma correta, com as chaves contendo chaves duplas.
console.log(JSON.parse('{ "a": 1, "b": "String", "c": true, "d": {}, "e": [] }')) //Strings tambem tem que estar delimitado por aspas duplas.



