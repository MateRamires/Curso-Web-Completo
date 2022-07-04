// Uma factory retorna um novo objeto a cada chamada dele.
module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}