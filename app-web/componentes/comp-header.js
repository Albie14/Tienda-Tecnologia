class CompHeader extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = 
            `<div class="logo">
                <img src="/admin/img/1.jpg" alt="log">
            </div>
            <div class="nav">
                <div class="nav-secciones">
                    <a href="">Inicio</a>
                </div>
                <div class="nav-secciones">
                    <a href="">Productos</a>
                    <ul class="productos-secciones">
                        <li><a href="">PC's</a></li>
                        <li><a href="">Laptop's</a></li>
                        <li><a href="">Accesorios</a></li>
                        <li><a href="">Audio y Video</a></li>
                        <li><a href="">Mobiliario</a></li>
                    </ul>
                </div>
                <div class="nav-secciones">
                    <a href="">Nosotros</a>
                </div>
                <div class="nav-secciones">
                    <a href="">Contactanos</a>
                </div>
                <div class="nav-secciones">
                    <a href="">Usuario</a>
                    <ul class="usuario-secciones">
                        <li><a href="">Ingresar</a></li>
                        <li><a href="">Registrarse</a></li>
                    </ul>
                </div>
            </div>
            <div class="resumen-carrito">
                <div class="total-carrito">
                    $ <span></span>
                </div>
                <button type="button" class="btn-carrito" aria-label="Abrir carrito"><i class="fa-solid fa-cart-shopping"></i></button>
                <div class="total-productos">
                    <span>5</span>
                </div>
            </div>`
    }
}
customElements.define('comp-header', CompHeader);