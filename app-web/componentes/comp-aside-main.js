class CompAsideMain extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = 
        `<section class="buscar">
            <label for="input-buscar">Buscar producto:</label>
            <div class="div-input-buscar">
                <input type="text" id="input-buscar" autocomplete="on" placeholder="">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </section>
        <section class="extra">Tu mejor opcion</section>`
    }
}
customElements.define('comp-aside-main', CompAsideMain);