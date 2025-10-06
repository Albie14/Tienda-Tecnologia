class CompProductosLaptops extends HTMLElement{
    constructor(){
        super();
        this.innerHTML =
        `
        <h2>Laptop's</h2>
        <div class="contenedor-productos">
            
        </div>`;
    };
    connectedCallback() {
        this.cargarProductos();
    }

    async cargarProductos(){
        try{
            const categoria = "laptop";
            const response = await fetch (`http://localhost/tienda-tecnologia-php/productos/inventario-prod.php?categoria=${categoria}`);

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
                                <button type="button">Agregar <i class="fa-solid fa-cart-plus"></i></button>
                            </div>
                        </div>
                `;
                contenedorProductos.appendChild(tarjetaProducto)
            })

        }catch(error){
            console.error("Error al cargar productos ", error);
        }
    }
}
customElements.define('comp-productos-laptops', CompProductosLaptops);