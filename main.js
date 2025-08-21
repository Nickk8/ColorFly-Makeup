// Seleciona os elementos do menu
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

// Ao clicar no ícone do menu, alterna as classes
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('active');
};

// Remove o menu ao clicar em qualquer link de navegação
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('active');
};

let carrinho = [];

const botoes = document.querySelectorAll('.add-carrinho');

botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    const produto = botao.getAttribute('data-produto');
    const preco = parseFloat(botao.getAttribute('data-preco'));

    carrinho.push({ produto, preco });
    atualizarContadorCarrinho();
    mostrarMensagem(`${produto} foi adicionado ao carrinho!`);
  });
});

function atualizarContadorCarrinho() {
  const contador = document.getElementById('cart-count');
  contador.innerText = carrinho.length;
}

function mostrarMensagem(texto) {
  const msg = document.getElementById('mensagem-confirmacao');
  msg.innerText = texto;
  msg.style.display = 'block';

  setTimeout(() => {
    msg.style.display = 'none';
  }, 2000); // Some após 2 segundos (2000 ms)
}


function atualizarContadorCarrinho() {
  const contador = document.getElementById('cart-count');
  contador.innerText = carrinho.length;
  
  // Salva no localStorage
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// FILTAR PRODUTOIS ---------------------------------

const filterButtons = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.box');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remover classe 'active' dos outros botões
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const category = button.getAttribute('data-filter');

    products.forEach(product => {
      const productCategory = product.getAttribute('data-category');

      if (category === 'all' || productCategory === category) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
});
