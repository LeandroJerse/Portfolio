const menuHamburguer = document.querySelector('.menu');
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu(){
    const nav = document.querySelector('.nav-responsive')
    menuHamburguer.classList.toggle('change')

    if (menuHamburguer.classList.contains('change')){
        nav.style.display = 'block'
    }
}