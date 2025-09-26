class CompHeader extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = 
            `<div class="logo">
                <img src="/admin/img/1.jpg" alt="log">
            </div>
            <div class="nav">
                <div class="nav-secciones">
                    <a href="#" data-route="/inicio">Inicio</a>
                </div>
                <div class="nav-secciones">
                    <a href="#" data-route="/productos">Productos</a>
                    <ul class="productos-secciones">
                        <li><a href="#" data-route="/productos/pcs">PC's</a></li>
                        <li><a href="#" data-route="/productos/laptops">Laptop's</a></li>
                        <li><a href="#" data-route="/productos/accesorios">Accesorios</a></li>
                        <li><a href="#" data-route="/productos/audio-video">Audio y Video</a></li>
                        <li><a href="#" data-route="/productos/mobiliario">Mobiliario</a></li>
                    </ul>
                </div>
                <div class="nav-secciones">
                    <a href="#" data-route="/nosotros">Nosotros</a>
                </div>
                <div class="nav-secciones">
                    <a href="#" data-route="/contactanos">Contactanos</a>
                </div>
                <div class="nav-secciones">
                    <a href="#">Usuario</a>
                    <ul class="usuario-secciones">
                        <li><a href="#" data-route="/ingresar">Ingresar</a></li>
                        <li><a href="#" data-route="/registrarse">Registrarse</a></li>
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
            </div>`;
    }  
}
customElements.define('comp-header', CompHeader);