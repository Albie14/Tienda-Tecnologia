class CompHero extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = 
        `<ul class="izquierda">
            <li>
            <i class="fa-solid fa-chevron-left"></i>
            <i class="fa-solid fa-chevron-left"></i>
            <i class="fa-solid fa-chevron-left"></i>
            <i class="fa-solid fa-chevron-left"></i>
            </li>
        </ul>

        <sub-comp-carrusel class="contenedor-carrusel">
            <div class="carrusel-hero">
            <div class="sec-hero">
                <p>Texto 1</p>
                <div class="linea-inferior"></div>
            </div>
            <div class="sec-hero">
                <p>Texto 2</p>
                <div class="linea-inferior"></div>
            </div>
            <!-- más slides -->
            </div>
        </sub-comp-carrusel>

        <ul class="derecha">
            <li>
            <i class="fa-solid fa-chevron-right"></i>
            <i class="fa-solid fa-chevron-right"></i>
            <i class="fa-solid fa-chevron-right"></i>
            <i class="fa-solid fa-chevron-right"></i>
            </li>
        </ul>`;
    }

    connectedCallback() {
        setTimeout(() => {
        this.iniciarCarrusel();
        }, 50);
    }

    iniciarCarrusel() {
        const carrusel = this.querySelector('.carrusel-hero');
        const slides = this.querySelectorAll('.sec-hero');
        const btnIzq = this.querySelector('.izquierda');
        const btnDer = this.querySelector('.derecha');

        let index = 0;
        const totalSlides = slides.length;
        const tiempo = 8000;

        const mostrarSlide = (i) => {
        carrusel.style.transform = `translateX(-${i * 100}%)`;

    slides.forEach(slide => {
        const lineaInferior = slide.querySelector('.linea-inferior');
        const textoHero = slide.querySelector('p');
        if (lineaInferior) lineaInferior.classList.remove('animacion-linea-titulo-hero');
        if (textoHero) textoHero.classList.remove('animacion-texto-hero');
    });

    const lineaSlideVisible = slides[i].querySelector('.linea-inferior');
    const parrafoSlideVisible = slides[i].querySelector('p');
    if (lineaSlideVisible) lineaSlideVisible.classList.add('animacion-linea-titulo-hero');
    if (parrafoSlideVisible) parrafoSlideVisible.classList.add('animacion-texto-hero');
        };

        const siguienteSlide = () => {
            index = (index + 1) % totalSlides;
            mostrarSlide(index);
        };

        const anteriorSlide = () => {
            index = (index - 1 + totalSlides) % totalSlides;
            mostrarSlide(index);
        };

        btnDer.addEventListener('click', siguienteSlide);
        btnIzq.addEventListener('click', anteriorSlide);

        let autoPlay = setInterval(siguienteSlide, tiempo);

        this.addEventListener('mouseenter', () => clearInterval(autoPlay));
        this.addEventListener('mouseleave', () => autoPlay = setInterval(siguienteSlide, tiempo));

        mostrarSlide(0);
    }
}

customElements.define('comp-hero', CompHero);