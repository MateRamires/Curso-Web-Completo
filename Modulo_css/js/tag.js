const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => { //querySelectorAll esta selecionando todas as tags com a classe .tag.
    const tagName = elemento.tagName.toLowerCase() //Apos isso, esse comando esta fazendo um forEach para cada um desses elementos onde ele pega a tagName de cada um desses elementos (tagName ira devoler "p" ou "h1" ou "div" etc)

    elemento.style.borderColor = colors.get(tagName) //Agora estamos aplicando uma cor a borda desse elemento.

    if(!elemento.classList.contains('nolabel')){ //Esse if esta vereficando se o elemento analisado NAO (!) contem a CLASSE nolabel
        const label = document.createElement("label") //Estamos passando a variavel label a criacao de um elemento <label>
        label.style.backgroundColor = colors.get(tagName)  //A esse elemento label estamos passando a cor vermelha
        label.innerHTML = tagName //E por ultimo estamos pssando a esse elemento label a tagName da cada uma das tags (forEach)
        elemento.insertBefore(label, elemento.childNodes[0]) //E por ultimos estamos inserindo essa label antes do que esta propriamente escrito dentro de cada tag. Entao se uma tag for uma <div> escrito "teste" dentro dela, no html ira aparecer "div teste" ou seja o nome da tag primeiro (em vermelho) e depois o que esta escrito dentro dela. 
        //Caso fosse mudado o childNodes para [1] o nome da tag com a cor apareceria depois do conteudo da div entao seria "teste div" por exemplo.
    }
})