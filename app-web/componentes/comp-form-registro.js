class CompFormRegistro extends HTMLElement{
    constructor(){
        super();
        this.innerHTML =
        `<form class="formulario-registro">
            <div class="formularioGrupo" id="grupoUsuario">
                <div class="formularioGrupoInput">
                    <label for="nombre" class="formularioLabel">Nombre</label>
                    <div class="input">
                        <input type="text" autocomplete="given-name" class="formularioInput" name="nombre" id="nombre" placeholder="Nombre">
                        <i class="iconoError chec fa-solid fa-circle-xmark"></i>
                    </div>
                </div>
                <div class="formularioGrupoMensajes">
                    <p class="leyendaInput">el nombre debe ser de 3 a 10 caracteres, solo letras</p>
                    <p class="errorInput ocultarMsjInput">Error en nombre</p>
                </div>
            </div>

            <div class="formularioGrupo" id="grupoNombre">
                <div class="formularioGrupoInput">
                    <label for="apellido" class="formularioLabel">Apellido</label>
                    <div class="input">
                        <input type="text" autocomplete="family-name" class="formularioInput" name="apellido" id="apellido" placeholder="Apellido">
                        <i class="iconoError fa-solid fa-circle-xmark"></i>
                    </div>
                </div>
                <div class="formularioGrupoMensajes ">
                    <p class="leyendaInput">el apellido debe ser de 3 a 10 caracteres, solo letras</p>
                    <p class="errorInput ocultarMsjInput">Error en apellido</p>
                </div>
            </div>

            <div class="formularioGrupo" id="grupoPassword">
                <div class="formularioGrupoInput">
                    <label for="password" class="formularioLabel">Clave</label>
                    <div class="input">
                        <input type="password" autocomplete="new-password" class="formularioInput" name="password" id="password" placeholder="Clave" >
                        <i class="fa fa-eye icono-toogle-clave-registro" data-input="password"></i>
                        <i class="iconoError fa-solid fa-circle-xmark"></i>
                    </div>
                </div>
                <div class="formularioGrupoMensajes ">
                    <p class="leyendaInput">La clave debe ser de 4 a 12 digitos</p>
                    <p class="errorInput ocultarMsjInput">Error en clave</p>
                </div>
            </div>

            <div class="formularioGrupo" id="grupoPassword2">
                <div class="formularioGrupoInput">
                    <label for="password2" class="formularioLabel">Repetir clave</label>
                    <div class="input">
                        <input type="password" autocomplete="new-password" class="formularioInput" name="password2" id="password2" placeholder="Repetir clave">
                        <i class="fa fa-eye icono-toogle-clave-registro" data-input="password2"></i>
                        <i class="iconoError fa-solid fa-circle-xmark"></i>
                    </div>
                </div>
                <div class="formularioGrupoMensajes ">
                    <p class="leyendaInput">Ambas claves deben ser iguales</p>
                    <p class="errorInput ocultarMsjInput">Error en confirmacion de clave</p>
                </div>
            </div>

            <div class="formularioGrupo" id="grupoCorreo">
                <div class="formularioGrupoInput">
                    <label for="correo" class="formularioLabel">Correo electronico</label>
                    <div class="input ">
                        <input type="email" autocomplete="username" class="formularioInput" name="correo" id="correo" placeholder="Correo electronico">
                        <i class="iconoError fa-solid fa-circle-xmark"></i>
                    </div>
                </div>
                <div class="formularioGrupoMensajes ">
                    <p class="leyendaInput">formato valido: correo@correo.com</p>
                    <p class="errorInput ocultarMsjInput">Correo ya esta registrado</p>
                </div>
            </div>

            <div class="formularioGrupo" id="grupoTelefono">
                <div class="formularioGrupoInput">
                    <label for="telefono" class="formularioLabel">Telefono</label>
                    <div class="input ">
                        <input type="number" class="formularioInput formularioGrupoCorrecto" name="telefono" id="telefono" placeholder="Telefono">
                        <i class="iconoError fa-solid fa-circle-xmark"></i>
                    </div>
                </div>
                <div class="formularioGrupoMensajes ">
                    <p class="leyendaInput">formato valido: 0400-123 45 67</p>
                    <p class="errorInput ocultarMsjInput">Telefono incorrecto</p>
                </div>
            </div>
            
            <div class="fila-completa">
                <div class="input ">
                    <label for="terminos-condiciones">
                        <input type="checkbox" name="terminos-condiciones" id="terminos-condiciones" >
                    </label>
                    <span>Acepto todos los<button type="button" id="descripcion-terminos">Terminos y Condiciones</button></span>
                </div>
                <div class="formularioGrupoMensajes ">
                    <p class="errorInput ocultarMsjInput" id="msjErrorTerminos">Debe aceptar los terminos y condiciones</p>
                </div>
            </div>
            <div class="fila-completa" id="formularioMensajeError">
                <p><i class="fa-solid fa-triangle-exclamation"></i><b> Error: </b><span>Todos los campos son requeridos</span></p>
            </div>
            <div class=" fila-completa">
                <button type="submit" class="formularioBtn">Enviar</button>
                <p class="formularioMensajeExito"></p>
            </div>
        </form>`;
    }
}

customElements.define('comp-form-registro', CompFormRegistro);