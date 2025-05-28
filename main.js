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
