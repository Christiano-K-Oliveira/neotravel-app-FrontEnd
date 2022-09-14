const menuPrincipal = document.querySelector('main')
const btnSearch = document.getElementById('btnPesquisar')
const inputSearch = document.getElementById('textPesquisa')
const secaoProdutos = document.getElementsByClassName('produtos')[0]
let quantidade = 0
let total = 0
let renderizarQuantidade = []
let pesquisa = []

function criarCarrinho(){
    let cart = document.createElement('section')
    let formulario = document.createElement('form')
    let barraPesquisa = document.createElement('input')
    let botaoPesquisa = document.createElement('button')
    let imageBotao = document.createElement('img')
    let listaProdutos = document.createElement('ul')
    let caixa1 = document.createElement('div')
    let quantidade = document.createElement('small')
    let numberQuantidade = document.createElement('small')
    let caixa2 = document.createElement('div')
    let totalProdutos = document.createElement('small')
    let numberTotal = document.createElement('small')
    let boxProdutos = document.createElement('div')
    let tittle = document.createElement('h3')
    let btnFinalizar = document.createElement('button')

    cart.className = 'carrinho'
    barraPesquisa.type = 'text'
    barraPesquisa.name = 'text_pesquisa'
    barraPesquisa.placeholder = 'O que está pensando?'
    barraPesquisa.required = 'true'
    botaoPesquisa.type = 'button'
    imageBotao.src = 'img/icons/149852.png'
    imageBotao.alt = 'btn-pesquisar'
    listaProdutos.className =  'produtosLista'
    caixa1.id = 'container_quantidade'
    quantidade.innerText = 'Quantidade:'
    numberQuantidade.id = 'numberQuantidade'
    caixa2.id = 'container_preco'
    totalProdutos.innerText = 'Total:'
    numberTotal.id = 'totalProdutos'
    botaoPesquisa.id = 'btnPesquisar'
    barraPesquisa.id = 'textPesquisa'
    tittle.innerText = 'Carrinho de compras'
    btnFinalizar.innerText = 'Finalizar Compra'
    btnFinalizar.id = 'btn_finalizar'


    pesquisa.push(barraPesquisa, botaoPesquisa)
    criarEventos(listaProdutos, btnFinalizar)

    numberQuantidade.innerText = 0
    numberTotal.innerText = 'R$ 0,00'

    botaoPesquisa.appendChild(imageBotao)
    formulario.append(barraPesquisa, botaoPesquisa)
    caixa1.append(quantidade, numberQuantidade)
    caixa2.append(totalProdutos, numberTotal)
    boxProdutos.append(tittle, listaProdutos)
    cart.append(formulario, boxProdutos, caixa1, caixa2, btnFinalizar)
    menuPrincipal.appendChild(cart)
}
criarCarrinho()
elementoVazio()


secaoProdutos.addEventListener('click', function(event){
    let tagEvent = event.target.tagName
    let btn = event.target.parentElement.id
    let boxVazio = document.getElementById('txtVazio')
    
    if(tagEvent === 'BUTTON'){
        if(quantidade === 0){
            boxVazio.remove()
        }
        montarTemplate(btn, listaProdutos)
    }

})


function montarTemplate(nome, lista){

    let listaCarrinho = document.getElementsByClassName('produtosLista')[0]
    let quantia = document.getElementById('numberQuantidade')
    let quantiaTotal = document.getElementById('totalProdutos')

    for(let i = 0; i < lista.length; i++){

        if(lista[i].tag === nome){
            let item = document.createElement('li')
            let foto = document.createElement('img')
            let caixa = document .createElement('div')
            let caixaSpan = document.createElement('span')
            let tituloCard = document.createElement('h3')
            let btnLixeira = document.createElement('button')
            let iconLixeira = document.createElement('img')
            let descricao = document.createElement('span')
            let preco = document.createElement('small')

            foto.src = lista[i].img
            tituloCard.innerText = lista[i].nameItem
            btnLixeira.className = 'removerProduto'
            btnLixeira.type = 'button'
            iconLixeira.src = 'img/icons/126468.png'
            iconLixeira.alt = 'icon.lixeira'
            descricao.innerText = lista[i].description
            preco.innerText = `R$ ${lista[i].value},00`

            quantidade++
            total += parseFloat(lista[i].value) 
            quantia.innerText = `${quantidade}`
            quantiaTotal.innerText = `R$ ${total.toFixed(3)},00`

            renderizarQuantidade.push(quantia, quantiaTotal)

            btnLixeira.appendChild(iconLixeira)
            caixaSpan.append(tituloCard, btnLixeira)
            caixa.append(caixaSpan, descricao, preco)
            item.append(foto, caixa)
            listaCarrinho.appendChild(item)
        }
    }
}


const mensagem = document.getElementById('mensagemEnviada')
const areaDeTexto = document.querySelector('textarea')
const nomeMensagem = document.getElementById('name')
const emailMensagem = document.getElementById('email')
let armazenarMensagem = []

mensagem.addEventListener('click', function(){
    if(areaDeTexto.value.length > 15 && nomeMensagem.value.length > 3 && emailMensagem.value.length > 15){
        alert('Sua mensagem foi enviada com sucesso!')
        armazenarMensagem.push({nome: nomeMensagem.value, email: emailMensagem.value, mensagem: areaDeTexto.value})
        console.log(armazenarMensagem)
    }
    else{
        alert('Preencha os campos corretamente.')
    }
})


function criarEventos(remover, finalizar){

    remover.addEventListener('click', function(event){

        let tagEvent = event.target.tagName
        let card = event.target.closest('li')
        let precoTotal = event.target.closest('div')
        precoTotal = precoTotal.children[2].innerText
        precoTotal = precoTotal.replaceAll('R$ ', '').replace(',', '.')
    
        if(tagEvent === 'BUTTON' || tagEvent === 'IMG'){
            quantidade--
            renderizarQuantidade[0].innerText = `${quantidade}`
            total -= parseFloat(precoTotal)
            renderizarQuantidade[1].innerText = `R$ ${total.toFixed(3)},00`
            if(renderizarQuantidade[1].innerText === 'R$ 0.000,00'){
                renderizarQuantidade[1].innerText = `R$ ${total},00`
            }

            card.remove()
        }
        if(quantidade === 0){
            elementoVazio()
        }
    })

    finalizar.addEventListener('click', function(){
        alert('Compra efetuada com sucesso!')
    })
}


function elementoVazio(){
    let list = document.getElementsByClassName('produtosLista')[0]

    let carrinhoVazio = document.createElement('img')
    let vazio = document.createElement('span')
    let caixaVazio = document.createElement('div')

    caixaVazio.id = 'txtVazio'
    vazio.innerText = 'Adicione Itens'
    carrinhoVazio.src = 'img/icons/60992.png'

    caixaVazio.append(carrinhoVazio, vazio)
    list.appendChild(caixaVazio)
}

//1)Dar o push do arrayFilter das que passarem no list.children e depois apaga-las (pelo innerHTML ou remove)
//(list.children[1]) e dar o push na lista para coloca-las na frente
//2)Só realizar pesquisa ao dar enter ou clicar no pesquisa[1] ou pelo keyup para capturar quando for 0: 3 eventos.

pesquisa[1].addEventListener('click', filtrarPesquisa)
pesquisa[0].addEventListener('keyup', function(event){
    if(event.keyCode ===  13){
        filtrarPesquisa(event)
    }
})
pesquisa[0].addEventListener('keyup', function(event){
    if(event.keyCode ===  8){
        filtrarPesquisa(event)
    }})

function filtrarPesquisa(event){
    event.preventDefault()
    const pesquisaItem = pesquisa[0].value
    realizarBusca(pesquisaItem)
}

function realizarBusca(nome){
    let list = document.getElementById('listaProducts')
    let name = nome.toLowerCase().trim()
    
    if(name.length === 0){
        list.innerHTML = ''
        list.innerHTML = armazemCodeList

        list.prepend(list)
    }
    else{
        for(let i = 0; i < list.children.length - 1; i++){
    
            let itemFiltro = list.children[i].id.toLocaleLowerCase().trim()
            let itemFiltro2 = list.children[i].children[1].innerText.toLocaleLowerCase().trim() 
    
            if(itemFiltro.includes(name) || itemFiltro2.includes(name)){

                let item = document.createElement('li')

                item.id = list.children[i].id

                let html = list.children[i].innerHTML.toString()
                item.innerHTML = html
                list.children[i].remove()               
                list.prepend(item)

            }
        
        }
    }

}

let formulario = document.querySelector('form')

formulario.addEventListener('submit', function(event){
    event.preventDefault()
})
// let listaProdutos = document.getElementsByClassName('listaProducts')[0]



// function filtrarPesquisa(event){
//     event.preventDefault()
//     const pesquisaUser = pesquisa[0].value
//     const resultadoBusca = buscarElemento(pesquisaUser)
//     montarTemplate(resultadoBusca)
// }

// function buscarElemento(valorPesquisa){
//     let arrayFilter = []
//     let pesquisa = valorPesquisa.toLowerCase().trim()

//     listaProdutos.forEach((item) => {

//         let itemFiltro = item.nome.toLowerCase().trim()

//         if(itemFiltro.includes(pesquisa)){
//             arrayFilter.push(item)
//         }
//         else if(pesquisa === ''){
//             return tasks
//         }
//     })
//     return arrayFilter
// }

//Pegar a li e trazela para frente e quanto estiver vazia voltar ao lugar