
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
            //transicion suave entre vistas
            vista.style.viewTransitionName = "none";
        
        });

        const rutaDestino = document.querySelector(`.vista[data-route="${ruta}"]`);
        if(rutaDestino){
            rutaDestino.classList.add("active");
            //transicion suave entre vistas
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
});
