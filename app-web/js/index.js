
// fetch('http://localhost/tienda-tecnologia-php/productos/inventario-prod.php')
//     .then(response =>{
//         if(!response.ok){
//             throw new Error ("error en respuesta: " + response.status)
//         } return response.json();
//     })v
//     .then(data=>{
//         console.log(data)
//     })
//     .catch(error=>{
//         console.log('error: ' + error)
//     })

document.addEventListener("DOMContentLoaded", () => {

    const enlaces = document.querySelectorAll("a[data-route]");
    const vistas = document.querySelectorAll(".vista");

    function navegar(ruta){
        if(document.startViewTransition){
            document.startViewTransition(()=>{
                cambiarVista(ruta)
            })
        }else{
                cambiarVista(ruta)
        }
    }

    function cambiarVista(ruta){
        vistas.forEach(vista=> {
            vista.classList.remove("active");
            vista.style.viewTransitionName = "none";
        
        });

        const rutaDestino = document.querySelector(`.vista[data-route="${ruta}"]`);
        if(rutaDestino){
            rutaDestino.classList.add("active");
            rutaDestino.style.viewTransitionName = "vista";
        }
    }

    enlaces.forEach(enlace=>{
        enlace.addEventListener('click', e=>{
            e.preventDefault();
            const ruta = enlace.getAttribute("data-route");
            navegar(ruta)
        })
    })

    navegar("/inicio")
    // function navegar(ruta) {
    //     // ocultar todas
    //     vistas.forEach(vista => vista.classList.remove("active"));

    //     // mostrar la que coincide con data-route
    //     const destino = document.querySelector(`.vista[data-route="${ruta}"]`);
    //     if (destino) {
    //     destino.classList.add("active");
    //     } else {
    //     console.warn("Ruta no encontrada:", ruta);
    //     }
    // }
    // interceptar clicks en los <a>
    // enlaces.forEach(enlace => {
    //     enlace.addEventListener("click", e => {
    //     e.preventDefault(); // evitar que recargue
    //     const ruta = enlace.getAttribute("data-route");
    //     navegar(ruta);
    //     });
    // });

    // iniciar en /inicio
    // navegar("/inicio");

   
});
