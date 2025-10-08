class CompProductos extends HTMLElement{
    constructor(){
        super();
        this.innerHTML =
        `
        <h2>Todos los productos</h2>
        <div class="contenedor-productos">
            
        </div>`;
    };
    connectedCallback() {
        this.cargarProductos();
    }

    async cargarProductos(){
        try{

            const response = await fetch ('http://localhost/tienda-tecnologia-php/productos/inventario-prod.php');
            if(!response.ok){
                throw new Error("Error al cargar productos");
            }
            const data = await response.json();
            const contenedorProductos = this.querySelector('.contenedor-productos');
            contenedorProductos.innerHTML = "";

            data.forEach(dato=>{
                const tarjetaProducto = document.createElement('div');
                tarjetaProducto.classList.add('tarjeta-producto');

                tarjetaProducto.innerHTML = 
                `<div class="img-prod">
                            <img src="${dato.imagen}" alt="${dato.nombre}">
                        </div>
                        <div class="texto-prod">
                            <h2>${dato.nombre}</h2>
                            <span>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </span>
                        </div>
                        <div class="btn-prod">
                            <div class="precio">
                                $ <br>
                                <span><strong>${dato.precio}</strong></span>
                            </div>
                            <div class="agregar-carrito">
                                <button type="button" class="btn-agregar-carrito" data-id="${dato.id}" data-nombre="${dato.nombre}" data-precio="${dato.precio}" data-imagen="${dato.imagen}" >
                                Agregar <i class="fa-solid fa-cart-plus"></i></button>
                            </div>
                        </div>
                `;
                contenedorProductos.appendChild(tarjetaProducto);
            })

        }catch(error){
            console.error("Error al cargar productos ", error);
        }
    }
}
customElements.define('comp-productos', CompProductos);