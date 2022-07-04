function tratarErroLancar(erro){
    throw new Error("Ocorreu um erro...");  //Essa linha de codigo muda a mensagem que vai aparecer no erro.
}

function imprimirNomeGritado(obj){
    try{ //O codigo apenas entrara em try, caso nao haja nenhum erro
        console.log(obj.name.toUpperCase() + "!!!");
    } catch (e) {  //Agora, caso seja encontrado um erro, ele entrara em catch.
        tratarErroLancar(e);
    } finally {  //Bloco finally SEMPRE roda. O codigo entrando no try ou no catch, no fim, ele vai entrar no finally tambem.
        console.log("Final")
    }
}

const obj = {nome: "roberto"} //A chamada da funcao dara erro pois o obj na funcao pede o atributo "name" e aqui esta "nome".
imprimirNomeGritado(obj);
