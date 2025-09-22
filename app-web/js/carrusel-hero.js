document.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(() => { /*para inicializar el slide en el primer elemento del carrusel*/
        mostrarSlide(0);
    }, 50); 
    //animacion carrusel hero
    const compHero = document.querySelector('comp-hero');

    const carrusel = compHero.querySelector('.carrusel-hero');
    const slides = compHero.querySelectorAll('.sec-hero');
    const btnIzq = compHero.querySelector('.izquierda');

    const btnDer = compHero.querySelector('.derecha');

    let index = 0;
    const totalSlides = slides.length;
    const tiempo = 10000; //tiempo de cambio entre un slide y otro

    function mostrarSlide(i) {
        carrusel.style.transform = `translateX(-${i * 100}%)`;
        
        // animaciones linea titulo y texto hero, foreach para quitar la animacion
        slides.forEach(slide =>{
            const lineaInferior = slide.querySelector('.linea-inferior');
            const textoHero = slide.querySelector('p');

            if(lineaInferior){
                lineaInferior.classList.remove('animacion-linea-titulo-hero')
            }
            if(textoHero){
                textoHero.classList.remove('animacion-texto-hero')
            }
        })
        // activa la animaciones
        const lineaSlideVisible = slides[i].querySelector('.linea-inferior');
        const parrafoSlideVisible = slides[i].querySelector('p')
        if(lineaSlideVisible){
            lineaSlideVisible.classList.add('animacion-linea-titulo-hero')
        }
        if(parrafoSlideVisible){
            parrafoSlideVisible.classList.add('animacion-texto-hero')
        }

    }
    function siguienteSlide() {
        index = (index + 1) % totalSlides;
        mostrarSlide(index);
    }

    function anteriorSlide() {
        index = (index - 1 + totalSlides) % totalSlides;
        mostrarSlide(index);
    }

    // Eventos en flechas
    btnDer.addEventListener('click', siguienteSlide);
    btnIzq.addEventListener('click', anteriorSlide);

    // Rotación automática
    let autoPlay = setInterval(siguienteSlide, tiempo);

    document.querySelector('.hero').addEventListener('mouseenter', () => {
        clearInterval(autoPlay);
    });

    document.querySelector('.hero').addEventListener('mouseleave', () => {
        autoPlay = setInterval(siguienteSlide, tiempo);
    });
})