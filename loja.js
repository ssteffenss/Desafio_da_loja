const chaveProdutos = 'PRODUTOS'; // key para uso no localstorage

function cargaInicial() {
  var valores = [
    {
      url: 'https://m.media-amazon.com/images/I/51XH6GpdFOL._AC_SX569_.jpg',
      titulo: 'camisa 1',
      descricao: 'camisa social'
    },
    {
      url: 'https://m.media-amazon.com/images/I/41Un2s4JHlL._AC_SX569_.jpg',
      titulo: 'camisa 2',
      descricao: 'camisa confortável para corrida'
    },
    {
      url: 'https://m.media-amazon.com/images/I/51-UttW1UTL._AC_SX679_.jpg',
      titulo: 'camisa 3',
      descricao: 'camisa esportiva'
    }
  ];

  valores = JSON.stringify(valores); // converte o array em string pra salvar no localstorage
  localStorage.setItem(chaveProdutos, valores); // salva o array como string no localstorage
}

function mostraValores() {
  var valores = localStorage.getItem(chaveProdutos); // pega os valores como string no localstorage
  valores = JSON.parse(valores); // converte a string em array

  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  valores.forEach((valor) => { // para cara registro no array executa o processo abaixo
    const divCard = document.createElement('div'); // cria uma div
    divCard.className = 'card col'; // insere a classe do bootstrap
    divCard.setAttribute('style', 'width: 18rem');

    const divCardBody = document.createElement('div');
    divCardBody.className = 'card-body';

    const img = document.createElement('img');
    img.setAttribute('src', valor.url);
    img.setAttribute('style', 'max-height: 190px; width: fit-content; align-self: center;'); // seta alguns estilos direto na tag

    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerHTML = valor.titulo; // adiciona o conteudo entre a abertura e fechamento da tag

    const p = document.createElement('p');
    p.className = 'card-text';
    p.innerHTML = valor.descricao;

    divCard.appendChild(img); // insere a img dentro da divCard
    divCard.appendChild(divCardBody);
    divCardBody.appendChild(h5);
    divCardBody.appendChild(p);

    const grid = document.getElementById('grid');
    grid.appendChild(divCard); // adiciona a divCard dentro do grid
  });
}

function cadastrar() {
  var titulo = document.getElementById('titulo').value;
  var descricao = document.getElementById('descricao').value;
  var url = document.getElementById('url').value;

  const produto = {
    titulo,
    descricao,
    url,
  }

  var valores = localStorage.getItem(chaveProdutos); // pega os valores como string no localstorage
  valores = JSON.parse(valores); // converte a string em array

  if (!valores) {
    valores = [];
  }

  valores.push(produto);

  valores = JSON.stringify(valores);
 
  localStorage.setItem(chaveProdutos, valores);
  location.href="index.html"

  var valores = localStorage.getItem(chaveProdutos); // pega os valores como string no localstorage
  valores = JSON.parse(valores); // converte a string em array

  valores.push(produto);

  valores = JSON.stringify(valores);
 
  localStorage.setItem(chaveProdutos, valores);
  alert('cadastrado com sucesso!')
}

var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }