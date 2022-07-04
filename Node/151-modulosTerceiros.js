//Para importar modulos de terceiros, basta usar o comando npm i <nome_do_modulo> no terminal. Esse comando ira instalar a pasta do modulo em questao dentro da sua pasta escolhida.
//Obs: Nao eh interresante passar modulos gigantes como o lodash (que foi criado nessa aula) para o github, para isso entao, deve-se criar um arquivo .gitignore e colocar o nome da pasta a ser ignorada. (No caso, a "node_modules").

const _ = require('lodash') //Nao eh necessario nesse caso passar todo o caminho do arquivo, ja que por padrao o node vai procurar na pasta node_modules a existencia do modulo passado (lodash nesse caso).

setInterval(() => console.log(_.random(500,600)), 2000) // random eh uma funcao de lodash.

//Nessa aula, foi instalado globalmente o nodemon, atravez do comando npm i -g (global) nodemon.




