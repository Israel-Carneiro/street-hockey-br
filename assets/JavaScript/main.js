const botaoMenu = document.querySelector ('.botao__menu')
const menu = document.querySelector ('.menu__navegacao')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__navegacao-ativo')
})