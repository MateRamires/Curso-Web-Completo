class Lancamento {
    constructor(nome = "Generico", valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = [] //Cria o array lancamentos, mas nao atribui valor a ele, apenas o declara como um array.
    }

    addLancamentos(...lancamentos){ //Esse metodo pode receber um numero indefinido de parametros.
        lancamentos.forEach(l => this.lancamentos.push(l)) //Para cada parametro recebido, o forEach ira puxar-los para o Array lancamentos criados nessa classe "CicloFinanceiro".
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {  //Para cada um dos elementos contidos no array lancamentos, ele ira adicionar o valor desses elementos a variavel "valorConsolidado".
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())