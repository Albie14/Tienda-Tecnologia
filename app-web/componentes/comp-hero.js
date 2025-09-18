class CompHero extends HTMLElement{
    constructor(){
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

        <sub-comp-carrusel class="contenedor-carrusel"></sub-comp-carrusel >
        
        <ul class="derecha">
            <li> 
                <i class="fa-solid fa-chevron-right"></i>
                <i class="fa-solid fa-chevron-right"></i>
                <i class="fa-solid fa-chevron-right"></i>
                <i class="fa-solid fa-chevron-right"></i>
            </li>
        </ul>`
    }
}
customElements.define('comp-hero', CompHero);