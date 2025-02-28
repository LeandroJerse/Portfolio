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
    else{
        nav.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); 
            const serviceText = this.previousElementSibling; 
            if (serviceText.classList.contains('expanded')) {
                serviceText.classList.remove('expanded');
                this.textContent = 'Read More';
            } else {
                serviceText.classList.add('expanded');
                this.textContent = 'Read Less';
            }
        });
    });
});