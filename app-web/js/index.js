
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

  function navegar(ruta) {
    // ocultar todas
    vistas.forEach(vista => vista.classList.remove("active"));

    // mostrar la que coincide con data-route
    const destino = document.querySelector(`.vista[data-route="${ruta}"]`);
    if (destino) {
      destino.classList.add("active");
    } else {
      console.warn("Ruta no encontrada:", ruta);
    }
  }

  // interceptar clicks en los <a>
  enlaces.forEach(enlace => {
    enlace.addEventListener("click", e => {
      e.preventDefault(); // evitar que recargue
      const ruta = enlace.getAttribute("data-route");
      navegar(ruta);
    });
  });

  // iniciar en /inicio
  navegar("/inicio");
});
