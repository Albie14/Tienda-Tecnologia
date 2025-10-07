document.addEventListener("DOMContentLoaded", ()=>{
    
    const btnAbrirCarrito = document.querySelector('.btn-carrito');
    const btnCerrarCarrito = document.querySelector('.btn-cerrar-carrito');
    const mostrarCarrito = document.querySelector('.contenedor-pantalla-completa');
    const body = document.querySelector('body');

    // bloquear los botones hasta que haya usuario en sesion PENDIENTE AQUI; despues de haber confgurado todo cart

    btnAbrirCarrito.addEventListener("click", ()=>{
        mostrarCarrito.classList.remove('oculto');
        body.style.overflow = 'hidden';
    })

    btnCerrarCarrito.addEventListener('click', ()=>{
        mostrarCarrito.classList.add('oculto');
        body.style.overflow = 'auto';
    })
})