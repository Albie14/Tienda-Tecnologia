class CompCarrito extends HTMLElement{
    constructor(){
        super();
        this.innerHTML =
        `<div class="contenedor-pantalla-completa oculto">
            <i class="fa-solid fa-circle-xmark btn-cerrar-carrito"></i>
            <div class="contenido-carrito">
                <div class="detalle-carrito oculto">
                    <h3>Tu compra</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Img</th>
                                <th>Producto</th>
                                <th>Und</th>
                                <th>Total</th>
                                <th><i class="fa-solid fa-trash-can"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="fila-prod-carrito">
                                <td class="img-prod-carrito"><img src="/admin/img/hero.avif" alt=""></td>
                                <td class="nombre-prod-carrito"><strong>22222</strong> <br>
                                    <span>$</span></td>
                                <td class="cant-und-prod">
                                    <button type="button"><i class="fa-solid fa-arrow-down-short-wide"></i></button>
                                    <span>1</span>
                                    <button type="button"><i class="fa-solid fa-arrow-up-wide-short"></i></button>
                                </td>
                                <td class="precio-total-prod">$ <span>10000</span></td>
                                <td><i class="fa-solid fa-xmark"></i></td>
                            </tr>
                            <tr class="fila-prod-carrito">
                                <td class="img-prod-carrito"><img src="/admin/img/hero.avif" alt=""></td>
                                <td class="nombre-prod-carrito"><strong>22222</strong> <br>
                                    <span>$</span></td>
                                <td class="cant-und-prod">
                                    <button type="button"><i class="fa-solid fa-arrow-down-short-wide"></i></button>
                                    <span>1</span>
                                    <button type="button"><i class="fa-solid fa-arrow-up-wide-short"></i></button>
                                </td>
                                <td class="precio-total-prod">$ <span>10000</span></td>
                                <td><i class="fa-solid fa-xmark"></i></td>
                            </tr>
                            <tr class="fila-prod-carrito">
                                <td class="img-prod-carrito"><img src="/admin/img/hero.avif" alt=""></td>
                                <td class="nombre-prod-carrito"><strong>22222</strong> <br>
                                    <span>$</span></td>
                                <td class="cant-und-prod">
                                    <button type="button"><i class="fa-solid fa-arrow-down-short-wide"></i></button>
                                    <span>1</span>
                                    <button type="button"><i class="fa-solid fa-arrow-up-wide-short"></i></button>
                                </td>
                                <td class="precio-total-prod">$ <span>10000</span></td>
                                <td><i class="fa-solid fa-xmark"></i></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Total Productos</td>
                                <td>$<span>100</span></td>
                            </tr>
                        </tfoot>
                    </table>
                    <div class="btns-completar-compra">
                        <div class="div-btn-comprar">
                            <button type="button" id="comprar">Comprar</button>
                            <i class="fa-solid fa-money-check-dollar"></i>
                        </div>
                        <div class="div-btn-eliminar-todo">
                            <button type="button" id="borrar-carrito">Borrar Carrito</button>
                            <i class="fa-solid fa-calendar-xmark"></i>
                        </div>
                    </div>
                </div>
                
                <div class="carrito-vacio visible">
                    <i class="fa-solid fa-face-sad-tear"></i>
                    <h3>Tu carrito esta vacio!!</h3>
                    <p>Solucionemos eso  <i class="fa-solid fa-arrow-rotate-left"></i></p>
                </div>
            </div>
        </div>`
    }
}
customElements.define('comp-carrito', CompCarrito);
