document.addEventListener('DOMContentLoaded', ()=>{
    const expresioneRegularesForm = {
        password: /^.{4,12}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    };

    const CompFormIngresar = document.querySelector('comp-form-ingresar');
    const formularioIngresar = CompFormIngresar.querySelector('.form-ingresar')

    async function validacionFormularioIngresar(e) {
        e.preventDefault();

        let password = CompFormIngresar.querySelector('#password-ingresar');
        let correo = CompFormIngresar.querySelector('#correo-ingresar');

        // Alarmas de error de los inputs
        const contenedorInput = CompFormIngresar.querySelectorAll('.input');
        const msjLeyendaInput = CompFormIngresar.querySelectorAll('.leyendaInput');
        const msjErrorInput = CompFormIngresar.querySelectorAll('.errorInput');
        const iconoError = CompFormIngresar.querySelectorAll('.iconoError');

        let formularioValido = true;

        if (!expresioneRegularesForm.correo.test(correo.value.trim()) || correo.value === "") {
            alarmasErrorDatoinput(contenedorInput[0], iconoError[0], msjLeyendaInput[0], msjErrorInput[0]);
            formularioValido = false;
        }

        if (!expresioneRegularesForm.password.test(password.value.trim()) || password.value === "") {
            alarmasErrorDatoinput(contenedorInput[1], iconoError[1], msjLeyendaInput[1], msjErrorInput[1]);
            formularioValido = false;
        }

        if (!formularioValido) return;

        const datos = { correo: correo.value, password: password.value };

        try {
            const response = await fetch('http://localhost/tienda-tecnologia-php/clientes/validar-usuarios.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datos)
            });

            const data = await response.json();
            if (data.acceso === 'permitido') {
                
                // se guardar la informacion del usuario para mantener la sesion activa y se cambia el funcionalidad del boton a cerrar sesion
                const nombreUsuarioIngresado = data.nombre;
                const apellidoUsuarioIngresado = data.apellido;
                const logueado = true;
    
                sessionStorage.setItem('usuarioSesion', JSON.stringify({
                    nombre: nombreUsuarioIngresado,
                    apellido: apellidoUsuarioIngresado,

                }));
                
                    setTimeout(()=>{
                        formularioIngresar.reset();
                        window.location = "/app-web/html/index.html";
                    }, 1000)
                return;
            }

            if (data.acceso === 'denegado') {
                if (data.razon === 'correo') {
                    alarmasErrorDatoinput(contenedorInput[0], iconoError[0], msjLeyendaInput[0], msjErrorInput[0]);
                } else if (data.razon === 'clave') {
                    alarmasErrorDatoinput(contenedorInput[1], iconoError[1], msjLeyendaInput[1], msjErrorInput[1]);
                }
            }

            if (data.error) console.error('Error del servidor:', data.error);

        } catch (err) {
            console.error('Error en login:', err);
        }
    }

    formularioIngresar.addEventListener('submit', (e)=>{
        e.preventDefault();
        validacionFormularioIngresar(e)
    })

    // error visuales en input
    function alarmasErrorDatoinput(contInput, icono, leyenda, msjError){
        contInput.classList.add('inputError');
        icono.style.opacity = 1;
        leyenda.classList.add('ocultarMsjInput');
        msjError.classList.remove('ocultarMsjInput');
        
            setTimeout(()=>{
                contInput.classList.remove('inputError');
                icono.style.opacity = 0;
                msjError.classList.add('ocultarMsjInput');
                leyenda.classList.remove('ocultarMsjInput');
            }, 3000)
    }

    //toogle ojo; mostrar - ocultar clave
    const botonesOjoClave = CompFormIngresar.querySelectorAll('.icono-toogle-clave-ingresar');
    botonesOjoClave.forEach(ojo=>{
        ojo.addEventListener('click', ()=>{
            const inputID = ojo.dataset.input; /*toma el ID de cada input enlazados con "data-input=" provenient del id de input*/
            const input = CompFormIngresar.querySelector(`#${inputID}`) /*asigna el id al input seleccionado a traves del data input*/
            const typeInput = input.getAttribute('type') /*reconoce el type (password o text) del input seleccionado*/
            
            input.setAttribute('type', typeInput === 'password' ? 'text' : 'password');
            ojo.classList.toggle('fa-eye');
            ojo.classList.toggle('fa-eye-slash');
            ojo.classList.toggle('mostrar-clave');
            });
    })

    const usuarioSesion = sessionStorage.getItem('usuarioSesion');
    const msjBienvenidaUsuario = document.querySelector('.msj-bienvenida-usuario');
    if(usuarioSesion){
        const usuario = JSON.parse(usuarioSesion);
        
        msjBienvenidaUsuario.classList.remove('oculto')
        msjBienvenidaUsuario.textContent = `Bienvenido, ${usuario.nombre} ${usuario.apellido}, ya puede realizar su compra`
    }else{
        msjBienvenidaUsuario.textContent = "";
        msjBienvenidaUsuario.classList.add('oculto');
    }
  
})