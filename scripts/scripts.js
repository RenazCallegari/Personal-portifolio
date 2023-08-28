/*==================== TOGGLE ICON, NAVBAR =======================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== SCROLL,SELECTION,ACTIVE,LINK =======================*/
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });
    /*==================== STICKY NAVBAR =======================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== REMOVE TOGGLE ICON AND NAVBAR LINK (SCROLL) =======================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

    /*==================== SCROLL REVEAL =======================*/
    ScrollReveal({ 
        //reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200 
    });

    ScrollReveal().reveal('.conteudo-inicio, .cabecalho', { origin: 'top' });
    ScrollReveal().reveal('.inicio-img, .container-servicos, .portifolio-box, .contato form', { origin: 'bottom' });
    ScrollReveal().reveal('.conteudo-inicio h1, .sobre-img', { origin: 'left' });
    ScrollReveal().reveal('.conteudo-inicio p, .conteudo-sobre', { origin: 'right' });

    /*==================== TYPED JS =======================*/
    const typed = new Typed ('.multiplo-texto', {
        strings: ['Desenvolvedor Frontend', 'Amante da Tecnologia', 'Ávido aprendiz'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

/*=========================================== DINAMIC TITLE =========================================*/
    // Função para atualizar o título da página
    function updateTitle(newTitle) {
        document.title = newTitle;
      }
  
       // Monitorar o scroll da página e atualizar o título conforme a seção
    window.addEventListener('scroll', function() {
        const section1 = document.getElementById('inicio');
        const section2 = document.getElementById('sobre');
        const section3 = document.getElementById('servicos');
        const section4 = document.getElementById('portifolio');
        const section5 = document.getElementById('contato');

        const scrollPosition = window.scrollY;
  
        if (scrollPosition >= section1.offsetTop && scrollPosition < section2.offsetTop) {
          updateTitle('Inicio');
        } else if (scrollPosition >= section2.offsetTop && scrollPosition < section3.offsetTop) {
          updateTitle('Sobre');
        } else if (scrollPosition >= section3.offsetTop && scrollPosition < section4.offsetTop) {
          updateTitle('Servicos');
        } else if (scrollPosition >= section4.offsetTop && scrollPosition < section5.offsetTop) {
          updateTitle('Portifolio');
        } else if (scrollPosition >= section5.offsetTop) {
          updateTitle('Contato');
        }
        
        /*else {
          updateTitle('PTF Renan Callegari');
        }*/
      });