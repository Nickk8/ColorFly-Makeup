// Recupera o carrinho do localStorage
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

const listaCarrinho = document.getElementById('lista-carrinho');
const totalSpan = document.getElementById('total');

function atualizarCarrinho() {
  listaCarrinho.innerHTML = '';
  let total = 0;

  carrinho.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('produto-item');

    div.innerHTML = `
      <span class="produto-nome">${item.produto}</span>
      <span class="produto-preco">R$ ${item.preco.toFixed(2)}</span>

      <div class="qty">
        <button onclick="diminuirQuantidade(${index})">-</button>
        <span>${item.quantidade}</span>
        <button onclick="aumentarQuantidade(${index})">+</button>
      </div>

      <button class="remove" onclick="removerItem(${index})">🗑️</button>
    `;

    listaCarrinho.appendChild(div);
    total += item.preco * item.quantidade;
  });

  totalSpan.innerText = total.toFixed(2);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function aumentarQuantidade(index) {
  carrinho[index].quantidade++;
  atualizarCarrinho();
}

function diminuirQuantidade(index) {
  if (carrinho[index].quantidade > 1) {
    carrinho[index].quantidade--;
  } else {
    carrinho.splice(index, 1);
  }
  atualizarCarrinho();
}

function removerItem(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function finalizarPedido() {
  const pagamento = document.getElementById('pagamento').value;

  let mensagem = 'Olá! Gostaria de fazer um pedido:%0A';

  carrinho.forEach(item => {
    mensagem += `- ${item.produto} (x${item.quantidade}) - R$ ${(item.preco * item.quantidade).toFixed(2)}%0A`;
  });

  mensagem += `%0ATotal: R$ ${totalSpan.innerText}`;
  mensagem += `%0AForma de pagamento: ${pagamento}`;

  const numeroWhatsApp = '5585999999999'; // Altere para seu número
  window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`, '_blank');
}

// Ao carregar a página
if (carrinho.length) {
  carrinho = carrinho.map(item => ({ ...item, quantidade: item.quantidade || 1 }));
}
atualizarCarrinho();
