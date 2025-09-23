class CompSection extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = 
        `   <div class="contenedor-img">
                <img src="/admin/img/marcas-1.png" alt="marca-1">
            </div>
            <div class="contenedor-img">
                <img src="/admin/img/marcas-2.png" alt="marca-2">
            </div>
            <div class="contenedor-img">
                <img src="/admin/img/marcas-3.png" alt="marca-3">
            </div>
            <div class="contenedor-img">
                <img src="/admin/img/marcas-4.png" alt="marca-4">
            </div>
            <div class="contenedor-img">
                <img src="/admin/img/marcas-5.png" alt="marca-5">
            </div>`
    }
}
customElements.define('comp-section', CompSection);
