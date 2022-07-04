//Pacote usado: npm i node-schedule@1.3.0 -E 
const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 6', function(){ // */5: representa que o codigo sera rodado de 5 em 5 segundos.  Primeiro *: representa os minutos (como foi colocado * entao eh qualquer minuto).  16: representa a hora do dia que ira rodar (poderia ser * para ser qualquer hora do dia).  Segundo *: representa o dia do mes, nesse caso, qualquer dia do mes.  Terceiro *: representa o mes, no caso, qualquer mes.  6: representa o dia da semana, no caso 6 seria sabado (hoje).
    console.log("Executando Tarefa 1", new Date().getSeconds()) //Esse codigo so sera executado aos sabados, as 16 horas, de cinco em cinco segundos.
}) 

//O setTimeout eh um temporizador padrao do JS, e nesse caso abaixo ele ira rodar a cada 20 segundos (20000 como segundo parametro), e quando ele executar, ira rodar o cancel, cancelando assim o temporizador da tarefa1.
setTimeout(function (){
    tarefa1.cancel()  //cancel eh uma forma de cancelar o temporizador que eh criado a partir do schedule job
    console.log("Cancelando Tarefa 1!")
}, 20000) 

//Regra ira setar as regras em que o temporizador sera disparado, igual a string da tarefa1 "'*/5 * 16 * * 6'".
const regra = new schedule.RecurrenceRule() //Declaracao do objeto necessario para setar as regras.
regra.dayOfWeek = [new schedule.Range(1, 6)] //ira rodar do dia 1 (segunda) ao dia 6 (sabado).
regra.hour = 16 //ira rodar as 16 horas de segunda a sabado.
regra.second = 30 //E aos 30 segundos.

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log("Executando Tarefa 2", new Date().getSeconds()) //Esse codigo so sera executado de segunda a sabado, as 16 horas e aos 30 segundos de cada minuto, Ex: 16:20:30. 
})

