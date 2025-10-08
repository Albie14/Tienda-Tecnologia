document.addEventListener("DOMContentLoaded", ()=>{
    
    const btnAbrirCarrito = document.querySelector('.btn-carrito');
    const btnCerrarCarrito = document.querySelector('.btn-cerrar-carrito');
    const mostrarCarrito = document.querySelector('.contenedor-pantalla-completa');
    const body = document.querySelector('body');

    // bloquear los botones hasta que haya usuario en sesion PENDIENTE AQUI; despues de haber confgurado todo cart
    //abrir y cerrar seccion carrito
    btnAbrirCarrito.addEventListener("click", ()=>{
        mostrarCarrito.classList.remove('oculto');
        body.style.overflow = 'hidden';
    })

    btnCerrarCarrito.addEventListener('click', ()=>{
        mostrarCarrito.classList.add('oculto');
        body.style.overflow = 'auto';
    })


    document.addEventListener('click', (e)=>{

        const btnAgregar = e.target.closest('.btn-agregar-carrito');
        if(btnAgregar){
            const producto = {
                id: btnAgregar.dataset.id,
                nombre: btnAgregar.dataset.nombre,
                precio: parseFloat(btnAgregar.dataset.precio),
                imagen: btnAgregar.dataset.imagen,
                cantidad: 1
            };
            agregarAlCarrito(producto);
        }   
    })

    let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];
    
    function guardarCarrito(){
        sessionStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function actualizarCarrito(){
        const detalleCarrito = document.querySelector('.detalle-carrito');
        const msjCarritoVacio = document.querySelector('.carrito-vacio');
        const productosSeleccionados = document.querySelector('.detalle-carrito tbody')
        const totalCarritoHeader = document.querySelector('.total-carrito-header'); /* valor ttal del carrito que se ve en header */

        if(!productosSeleccionados) return;
        

        if(carrito && carrito.length>0){
            msjCarritoVacio.classList.add('oculto')
            detalleCarrito.classList.remove('oculto');

            productosSeleccionados.innerHTML = "";

            carrito.forEach((producto, index) =>{
                const filaProducto = document.createElement('tr');
                filaProducto.classList = 'fila-prod-carrito';
                filaProducto.dataset.index = index;

                const totalProducto = (Number(producto.precio) * Number(producto.cantidad))
                const totalCarrito = carrito.reduce((acumulador, producto)=>{
                    return acumulador + (producto.precio * producto.cantidad);
                }, 0)
                
                const totalCarritoDetalle = document.querySelector('.total-carrito-detalle');

                totalCarritoDetalle.textContent = `${totalCarrito}`;

                totalCarritoHeader.textContent = `${totalCarrito}`;

                if(totalCarrito == 0){
                    totalCarritoHeader.textContent = ""
                }
                

                filaProducto.innerHTML = 
                `<td class="img-prod-carrito"><img src="${producto.imagen}" alt="${producto.nombre}"></td>
                <td class="nombre-prod-carrito"><strong>${producto.nombre}</strong> <br><span>$ ${producto.precio}</span></td>
                <td class="cant-und-prod">
                    <button type="button" class="btn-disminuir-prod"><i class="fa-solid fa-arrow-down-short-wide"></i></button>
                    <span>${producto.cantidad}</span>
                    <button type="button" class="btn-aumentar-prod"><i class="fa-solid fa-arrow-up-wide-short"></i></button>
                </td>
                <td class="precio-total-prod">$ <span>${totalProducto}</span></td>
                <td><i class="fa-solid fa-xmark btn-eliminar-prod"></i></td>`;

                productosSeleccionados.appendChild(filaProducto);

            })

            
        }else{
            msjCarritoVacio.classList.remove('oculto')
            detalleCarrito.classList.add('oculto');
            totalCarritoHeader.textContent = ""
            

        }   
    }

    //Eventos internos de cada producto: aemntar, dismuir, eliminar;
    document.addEventListener(('click'), (e)=>{
        if(e.target.closest('.btn-vaciar-carrito')){
            const confirmar = confirm('Seguro que desea eliminar todos los productos?')
            if(confirmar){
                carrito = [];
                guardarCarrito();
                actualizarCarrito();
            }
            return;
        }

        const fila = e.target.closest('tr.fila-prod-carrito');
        if(!fila) return;

        const index = fila.dataset.index;

        //aumentar cantidad producto
        if(e.target.closest('.btn-aumentar-prod')){
            carrito[index].cantidad++;
            guardarCarrito();
            actualizarCarrito();
        }

        //disminuir cantidad producto
        if(e.target.closest('.btn-disminuir-prod')){
            carrito[index].cantidad --;
            if(carrito[index].cantidad <= 0){
                carrito.splice(index, 1); /* elimina el producto cuando llega a cero */
            }
            guardarCarrito();
            actualizarCarrito();
        }

        //eliminar producto del carrito
        if(e.target.closest('.btn-eliminar-prod')){
            carrito.splice(index, 1);
            guardarCarrito();
            actualizarCarrito();
        }
    })

    actualizarCarrito();


    function agregarAlCarrito(prod){

        const productoExistente = carrito.find(item => item.id ===prod.id);

        if(productoExistente){
            productoExistente.cantidad++;
            
        }else{
            carrito.push(prod);
        }


        sessionStorage.setItem('carrito', JSON.stringify(carrito));
        console.log('carrito actulizado: ', carrito);
        actualizarCarrito();
    }


})