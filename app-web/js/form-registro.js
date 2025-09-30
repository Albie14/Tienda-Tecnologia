document.addEventListener('DOMContentLoaded', ()=>{
    const expresioneRegularesForm = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,12}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    };

    const compFormularioRegistro = document.querySelector('comp-form-registro');
    const formularioRegistro = compFormularioRegistro.querySelector('.formulario-registro');
   
    function validacionFormulario (e){
        e.preventDefault();

        let nombre = compFormularioRegistro.querySelector('#nombre');
        let apellido = compFormularioRegistro.querySelector('#apellido');
        let password = compFormularioRegistro.querySelector('#password');
        let password2 = compFormularioRegistro.querySelector('#password2');
        let correo = compFormularioRegistro.querySelector('#correo');
        let telefono = compFormularioRegistro.querySelector('#telefono');
        let terminosCondiciones = compFormularioRegistro.querySelector('#terminos-condiciones');

        //Alarmas de error de los inputs
        const contenedorInput = compFormularioRegistro.querySelectorAll('.input');
        const msjLeyendaInput = compFormularioRegistro.querySelectorAll('.leyendaInput');
        const msjErrorInput = compFormularioRegistro.querySelectorAll('.errorInput');
        const iconoError = compFormularioRegistro.querySelectorAll('.iconoError');
        const msjErrorGeneral = compFormularioRegistro.querySelector('#formularioMensajeError');

        let formularioValido = true;

        if(!expresioneRegularesForm.nombre.test(nombre.value.trim())){
            alarmasErrorDatoinput(contenedorInput[0], iconoError[0], msjLeyendaInput[0], msjErrorInput[0], msjErrorGeneral);
            formularioValido = false;
        }

        if(!expresioneRegularesForm.nombre.test(apellido.value.trim())){
            alarmasErrorDatoinput(contenedorInput[1], iconoError[1], msjLeyendaInput[1], msjErrorInput[1], msjErrorGeneral);
            formularioValido = false;
        }

        if(!expresioneRegularesForm.password.test(password.value.trim())){
            alarmasErrorDatoinput(contenedorInput[2], iconoError[2], msjLeyendaInput[2], msjErrorInput[2], msjErrorGeneral);
            formularioValido = false;
        }

        if(password2.value.trim() !== password.value.trim() || password2.value == ''){
            alarmasErrorDatoinput(contenedorInput[3], iconoError[3], msjLeyendaInput[3], msjErrorInput[3], msjErrorGeneral);
            formularioValido = false;
        }
        if(!expresioneRegularesForm.correo.test(correo.value.trim())){
            alarmasErrorDatoinput(contenedorInput[4], iconoError[4], msjLeyendaInput[4], msjErrorInput[4], msjErrorGeneral);
            formularioValido = false;
        }

        if(!expresioneRegularesForm.telefono.test(telefono.value.trim())){
            alarmasErrorDatoinput(contenedorInput[5], iconoError[5], msjLeyendaInput[5], msjErrorInput[5], msjErrorGeneral);
            formularioValido = false;
        }

        if(!terminosCondiciones.checked){
            msjErrorInput[6].classList.remove('ocultarMsjInput')
            msjErrorGeneral.style.opacity = 1;
            terminosCondiciones.classList.add('errorInputCheck');
                setTimeout(()=>{
                    msjErrorInput[6].classList.add('ocultarMsjInput')
                    msjErrorGeneral.style.opacity = 0;
                    terminosCondiciones.classList.remove('errorInputCheck');
                }, 3000);
            formularioValido = false;
        }

        if(formularioValido){
            const datos = {
                nombre: nombre.value,
                apellido: apellido.value,
                correo: correo.value,
                telefono: telefono.value,
                clave: password.value,
                terminos: terminosCondiciones.checked
            };
            fetch('http://localhost/tienda-tecnologia-php/clientes/registro-usuarios.php',{
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            })
            .then(res => res.json())
        
            msjUsuarioRegistrado(nombre.value , apellido.value);

            setTimeout(()=>{
                formularioRegistro.reset();
                window.location.href = '/app-web/html/index.html';
            }, 5000)
        }



    }
            
    formularioRegistro.addEventListener('submit', (e)=>{
        e.preventDefault();
        validacionFormulario(e);
    })


    /*Marcas de errores visuales en inputs*/
    function alarmasErrorDatoinput(contInput, icono, leyenda, msjError, msjErrorGeneral){
        contInput.classList.add('inputError');
        icono.style.opacity = 1;
        leyenda.classList.add('ocultarMsjInput');
        msjError.classList.remove('ocultarMsjInput');
        msjErrorGeneral.style.opacity = 1;
        
            setTimeout(()=>{
                contInput.classList.remove('inputError');
                icono.style.opacity = 0;

                msjError.classList.add('ocultarMsjInput');
                leyenda.classList.remove('ocultarMsjInput');
                msjErrorGeneral.style.opacity = 0;
            }, 3000)
    }

    //toogle ojo; mostrar - ocultar clave
    const botonesOjoClave = compFormularioRegistro.querySelectorAll('.icono-toogle-clave-registro');
    botonesOjoClave.forEach(ojo=>{
        ojo.addEventListener('click', ()=>{
            const inputID = ojo.dataset.input; /*toma el ID de cada input enlazados con "data-input=" provenient del id de input*/
            const input = compFormularioRegistro.querySelector(`#${inputID}`) /*asigna el id al input seleccionado a traves del data input*/
            const typeInput = input.getAttribute('type') /*reconoce el type (password o text) del input seleccionado*/
            
            input.setAttribute('type', typeInput === 'password' ? 'text' : 'password');
            ojo.classList.toggle('fa-eye');
            ojo.classList.toggle('fa-eye-slash');
            ojo.classList.toggle('mostrar-clave');
            });
        })


    function msjUsuarioRegistrado(nombre, apellido){
        const contedorMsj = formularioRegistro.querySelector(".formularioMensajeExito");
        const textoMsj = document.createElement("span");
        textoMsj.textContent =  `Hola, ${nombre} ${apellido}, has sido registrado exitosamente`;

        contedorMsj.innerHTML = "";
        contedorMsj.appendChild(textoMsj);
    }
        
})