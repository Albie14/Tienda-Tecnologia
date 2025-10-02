
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
    navegar("/inicio");

    // cambio botones, ingresar y cerrar sesion(eliminar setItem sessionStorage)
    //estado del usuario logueado y funcionalidad del boton ingresar;
    const btnAbrirCerrraSesion = document.getElementById('btn-ingresar-cerrar-sesion');
    
    function actulizarBoton (){
        const usuarioSesion = sessionStorage.getItem('usuarioSesion');
        console.log('estado actua: ', usuarioSesion);
        if(usuarioSesion){
            btnAbrirCerrraSesion.textContent = "Cerrar sesion";
        }else{
            btnAbrirCerrraSesion.textContent = "Ingresar";
        }
    }
    
    btnAbrirCerrraSesion.addEventListener("click", ()=>{
        const usuarioSesion = sessionStorage.getItem('usuarioSesion');

        if(usuarioSesion){
            sessionStorage.removeItem('usuarioSesion');
            actulizarBoton();
            navegar("/inicio");
        }else{
            navegar("/ingresar")
        }
    });

    window.addEventListener("popstate", ()=>{
        actulizarBoton()
    })
    actulizarBoton();
})

//  const btnAbrirCerrraSesion = document.getElementById('btn-ingresar-cerrar-sesion');
    
//     function actulizarBoton (){
//         const usuarioSesion = sessionStorage.getItem('usuarioSesion');

//         if(usuarioSesion){
//             btnAbrirCerrraSesion.textContent = "Cerrar sesion";
//         }else{
//             btnAbrirCerrraSesion.textContent = "Ingresar";
//         }
//     }

//     btnAbrirCerrraSesion.addEventListener('click', ()=>{
//         const usuarioSesion = sessionStorage.getItem('usuarioSesion');

//         if(usuarioSesion){
//             sessionStorage.removeItem("usuarioSecion");
//             actulizarBoton();
//             navegar("/inicio")
//         }else{
//             navegar("/ingresar")
//         }
//     });
//     actulizarBoton()


//  const usuarioSesion = sessionStorage.getItem('usuarioSesion');

//         if(usuarioSesion){
//             btnAbrirCerrraSesion.textContent = "Cerrar sesion";
//             btnAbrirCerrraSesion.addEventListener("click", ()=>{
//                 btnAbrirCerrraSesion.textContent = "Ingresar";
//                 sessionStorage.removeItem('usuarioSesion');
//                 navegar("/inicio");
//             })

//         }else{
//             btnAbrirCerrraSesion.textContent = "Ingresar";
            

//         }