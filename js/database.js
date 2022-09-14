// Banco de dados dos produtos

const listaProdutos = [
  {
    id: 1,
    img: "img/Londres - Inglaterra/istockphoto.jpg",
    nameItem: "Pacote Londres",
    description:
      "Pacote completo de viagem para Londres - Inglaterra.",
    value: "18.000",
    addCart: "Adicionar ao carrinho",
    tag: "Londres",
  },
  {
    id: 2,
    img: "img/Quioto - Japão/quioto.Ryōan-ji.jpeg",
    nameItem: "Pacote Quioto: Ryōan-ji",
    description:
      "Pacote completo de viagem para Quioto: Ryōan-ji - Japão.",
    value: "12.000",
    addCart: "Adicionar ao carrinho",
    tag: "Quioto.Ryōan-ji",
  },
  {
    id: 3,
    img: "img/Paris - França/paris.jpg",
    nameItem: "Pacote Paris",
    description:
      "Pacote completo de viagem para Paris - França.",
    value: "15.000",
    addCart: "Adicionar ao carrinho",
    tag: 'Paris',
  },
  {
    id: 4,
    img: "img/Roma - Itália/roma.jpeg",
    nameItem: "Pacote Roma",
    description:
      "Pacote completo de viagem para Roma - Itália.",
    value: "21.000",
    addCart: "Adicionar ao carrinho",
    tag: "Roma",
  },
  {
    id: 5,
    img: "img/Suiça - Kandersteg/Kandersteg.jpg",
    nameItem: "Kandersteg",
    description:
      "Pacote completo para Kandersteg - Suiça.",
    value: "23.000",
    addCart: "Adicionar ao carrinho",
    tag: "Kandersteg",
  },
  {
    id: 6,
    img: "img/Éilat - Israel/Éilat.jpg",
    nameItem: "Pacote Éilat",
    description:
      "Pacote completo para Éilat - Israel.",
    value: "19.000",
    addCart: "Adicionar ao carrinho",
    tag: "Éilat",
  },
  {
    id: 7,
    img: "img/Fernando de Noronha - Brasil/Fernando-de-Noronha.png",
    nameItem: "Pacote Fern. de Noronha",
    description:
      "Pacote completo para Fernando de Noronha - Brasil.",
    value: "7.000",
    addCart: "Adicionar ao carrinho",
    tag: "Fernando-de-Noronha",
  },
  {
    id: 8,
    img: "img/Canadá - Ottawa/Ottawa.jpeg",
    nameItem: "Pacote Ottawa",
    description:
      "Pacote completo para Ottawa - Canadá.",
    value: "8.000",
    addCart: "Adicionar ao carrinho",
    tag: "Ottawa",
  },
  {
    id: 9,
    img: "img/Fernando de Noronha - Brasil/Fernando-de-Noronha.png",
    nameItem: "Pacote Nova York",
    description:
      "Pacote completo para Nova York - Estados Unidos.",
    value: "7.500",
    addCart: "Adicionar ao carrinho",
    tag: "Nova-York",
  }
];

const cardsProdutos = [
  {
    id: "Londres",
    imagem: ["img/Londres - Inglaterra/londres.jpg", "Japão.Quioto"],
    pais: ["inglaterra", "Inglaterra"],
    titulo: "Londres",
    caracteristicas: ["Hospedagem", "Passeio", "Guia Turístico"],
    descricao: "Londres está localizada no sul da Inglaterra e é a capital política e econômica do Reino Unido. O centro da cidade está situado a 60 km da desembocadura do Tâmisa, rio que percorre a cidade. Sua privilegiada localização no centro sudeste da Inglaterra a beneficiou, já que, durante muito tempo, foi a região mais povoada e rica do país.",
    preco: "R$ 18.000,00",
    link: ["infoLondres.html", "> Saiba mais"],
    botao: "Adiconar ao carrinho"

  },
  {
    id: "Quioto.Ryōan-ji",
    imagem: ["img/Quioto - Japão/quioto.Ryōan-ji.jpeg", "Japão.Quioto"],
    pais: ["japao", "Japão"],
    titulo: "Quioto: Ryōan-ji",
    caracteristicas: ["Hospedagem", "Guia Turístico", "Café da Manhã"],
    descricao: "Kyoto, a antiga capital do Japão, é uma cidade famosa por causa do seu importante patrimônio cultural. Os turistas podem visitar obras arquitetônicas icônicas, belos parques e jardins, além de templos que mantêm viva uma cultura milenar.",
    preco: "R$ 12.000,00",
    link: ["infoQuioto.html", "> Saiba mais"],
    botao: "Adiconar ao carrinho"

  },
  {
    id: "Paris",
    imagem: ["img/Paris - França/paris.jpg", "França.Paris"],
    pais: ["franca", "França"],
    titulo: "Paris",
    caracteristicas: ["Hospedagem", "Guia Turístico", "Wifi-Gratuito"],
    descricao: "Paris é a capital da França e uma das cidades mais importantes e influentes do mundo. Visitar a Torre Eiffel, o Arco do Triunfo ou a Catedral de Notre Dame ou passear por alguns dos bairros mais charmosos da cidade.",
    preco: "R$ 15.000,00",
    link: ["infoParis.html", "> Saiba mais"],
    botao: "Adiconar ao carrinho"

  },
  {
    id: "Roma",
    imagem: ["img/Roma - Itália/roma.jpeg", "Itália.Roma"],
    pais: ["italia", "Itália"],
    titulo: "Roma",
    caracteristicas: ["Hospedagem", "Restaurante", "Guia Turístico"],
    descricao: "Roma, a capital da Itália, é uma cidade cosmopolita, enorme, com quase 3.000 anos de arte, arquitetura e cultura influentes no mundo todo e à mostra. Ruínas antigas como o Fórum e o Coliseu evocam o poder do antigo Império Romano.",
    preco: "R$ 21.000,00",
    link: ["infoRoma.html", "> Saiba mais"],
    botao: "Adiconar ao carrinho"

  },
  {
    id: "Kandersteg",
    imagem: ["img/Suiça - Kandersteg/Kandersteg.jpg", "Suiça.Kandersteg"],
    pais: ["suica", "Suiça"],
    titulo: "Kandersteg",
    caracteristicas: ["Hospedagem", "Wifi-Gratuito", "Guia Turístico"],
    descricao: "Kandersteg é uma comuna da Suíça, no Cantão Berna, com cerca de 1.179 habitantes. Estende-se por uma área de 134,56 km², é uma Aldeia alpina suíça com o caminho Allmenalp para o Lago Oeschinen, trilhas de esqui Sunnbüel e Lago Blausee.",
    preco: "R$23.000,00", 
    link: ["infoKandersteg.html", "> Saiba mais"],
    botao: "Adiconar ao carrinho"

  },
  {
    id: "Éilat",
    imagem: ["img/Éilat - Israel/Éilat.jpg", "Israel.Éilat"],
    pais: ["israel", "Israel"],
    titulo: "Éilat",
    caracteristicas: ["Hospedagem", "Café da Manhã", "Guia Turístico"],
    descricao: "Eilat é um porto e cidade turística no sul de Israel, no Mar Vermelho, perto da Jordânia. As praias são conhecidas pelas águas calmas, como Dolphin Reef, onde é possível avistar golfinhos com frequência.",
    preco: "R$19.000,00",
    link: ["infoEilat.html", "> Saiba mais"],
    botao: "Adiconar ao carrinho"

  }
]

let codeList = document.getElementById('listaProducts')
let armazemCodeList = codeList.innerHTML.toString()

// function realizarBusca(nome){
//   let list = document.getElementById('listaProducts')
//   let armazenarHTML = list.innerHTML
//   // let arrayFilter = []
//   let name = nome.toLowerCase().trim()

//   if(name.length === 0){
//       list.innerHTML = ''
//       list.innerHTML = armazenarHTML
//   }
//   else{
//       for(let i = 0; i < list.children.length - 1; i++){
  
//           let itemFiltro = list.children[i].id.toLocaleLowerCase().trim() //Pegar o nome
//           let itemFiltro2 = list.children[i].children[1].innerText.toLocaleLowerCase().trim() //Pegar o país...- 
//           //list.children[i].children[1].innerText.toLocaleLowerCase().trim() testar no  -FUNCIONOU!!!
  
//           if(itemFiltro.includes(name) || itemFiltro2.includes(name)){

//               // listAcessivel.unshift(listAcessivel[i])
//               let item = document.createElement('li')
//               let foto = document.createElement('img')
//               let paisElement = document.createElement('span')
//               let tittle = document.createElement('h3')
//               let caixaSpans = document.createElement('div')
//               let caracter1 = document.createElement('span')
//               let caracter2 = document.createElement('span')
//               let caracter3 = document.createElement('span')
//               let descricaoElement = document.createElement('p')
//               let price = document.createElement('small')
//               let hyperLink = document.createElement('a')
//               let botaoAdicionar = document.createElement('button')

//               item.id = cardsProdutos[i].id
//               foto.src = cardsProdutos[i].imagem[0]
//               foto.alt = cardsProdutos[i].imagem[1]
//               paisElement.className = cardsProdutos[i].pais[0]
//               paisElement.innerText = cardsProdutos[i].pais[1]
//               tittle.innerText = cardsProdutos[i].titulo
//               caracter1.innerText = cardsProdutos[i].caracteristicas[0]
//               caracter2.innerText = cardsProdutos[i].caracteristicas[1]
//               caracter3.innerText = cardsProdutos[i].caracteristicas[2]
//               descricaoElement.innerText = cardsProdutos[i].descricao
//               price.innerText = cardsProdutos[i].preco
//               hyperLink.href = cardsProdutos[i].link[0]
//               hyperLink.innerText = cardsProdutos[i].link[1]
//               botaoAdicionar.type = 'button'
//               botaoAdicionar.className = 'adicionarProduto'
//               botaoAdicionar.innerText = cardsProdutos[i].botao

//               caixaSpans.append(caracter1, caracter2, caracter3)
//               item.append(foto, paisElement, tittle, caixaSpans, descricaoElement, price, hyperLink, botaoAdicionar)

//               list.appendChild(item)
//               list.children[i].remove()               

//           }
      
//       }
//   }

// }