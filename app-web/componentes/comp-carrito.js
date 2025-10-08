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
                        

                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Total Productos</td>
                                <td>$ <span class="total-carrito-detalle"></span></td>
                            </tr>
                        </tfoot>
                    </table>
                    <div class="btns-completar-compra">
                        <div class="div-btn-comprar">
                            <button type="button" id="comprar">Comprar</button>
                            <i class="fa-solid fa-money-check-dollar"></i>
                        </div>
                        <div class="div-btn-eliminar-todo">
                            <button type="button" class="btn-vaciar-carrito">Borrar Carrito</button>
                            <i class="fa-solid fa-calendar-xmark"></i>
                        </div>
                    </div>
                </div>
                
                <div class="carrito-vacio">
                    <i class="fa-solid fa-face-sad-tear"></i>
                    <h3>Tu carrito esta vacio!!</h3>
                    <p>Solucionemos eso  <i class="fa-solid fa-arrow-rotate-left"></i></p>
                </div>
            </div>
        </div>`
    }
}
customElements.define('comp-carrito', CompCarrito);


                            
