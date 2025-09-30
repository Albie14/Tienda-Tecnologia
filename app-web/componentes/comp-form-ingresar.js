class CompFormIngresar extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = 
        `<form class="form-ingresar ">
            <div class="formularioGrupo">
                <div class="formularioGrupoInput">
                    <label for="correo-ingresar" class="formularioLabel">Correo electronico</label>
                    <div class="input ">
                        <input type="email" autocomplete="username" class="formularioInput" name="correo-ingresar" id="correo-ingresar" placeholder="Correo electronico">
                        <i class="iconoError fa-solid fa-circle-xmark"></i>
                    </div>
                </div>
                <div class="formularioGrupoMensajes ">
                    <p class="leyendaInput">formato valido: correo@correo.com</p>
                    <p class="errorInput ocultarMsjInput">Correo no registrado</p>
                </div>
            </div>
            <div class="formularioGrupo">
                <div class="formularioGrupoInput">
                    <label for="password-ingresar" class="formularioLabel">Clave</label>
                    <div class="input">
                        <input type="password" autocomplete="new-password" class="formularioInput" name="password-ingresar" id="password-ingresar" placeholder="Clave" >
                        <i class="fa fa-eye icono-toogle-clave-ingresar" data-input="password-ingresar"></i>
                        <i class="iconoError fa-solid fa-circle-xmark"></i>
                    </div>
                </div>
                <div class="formularioGrupoMensajes ">
                    <p class="leyendaInput">Clave del usuario</p>
                    <p class="errorInput ocultarMsjInput">Error en clave</p>
                </div>
            </div>
            <button type="submit" class="formularioBtn">Enviar</button>
            <button type="button" id="cambiar-recup-clave">Cambiar o recuperar Claver</button>
        </form>
        <div class="forms-cambiar-recup-clave oculto"> 
            <form class="verifiacion-correo">
                <div class="formularioGrupo">
                    <div class="formularioGrupoInput">
                        <label for="correo-verificar" class="formularioLabel">Correo electronico</label>
                        <div class="input ">
                            <input type="email" autocomplete="username" class="formularioInput" name="correo-verificar" id="correo-verificar" placeholder="Correo electronico">
                            <i class="iconoError fa-solid fa-circle-xmark"></i>
                        </div>
                    </div>
                    <div class="formularioGrupoMensajes ">
                        <p class="leyendaInput">formato valido: correo@correo.com</p>
                        <p class="errorInput ocultarMsjInput">Correo no encontrado</p>
                    </div>
                </div>
            <button type="submit" class="formularioBtn">Verificar Correo</button>
            </form>

            <form class="modificacion-clave">
                <input type="text" name="username" autocomplete="username" hidden>
                <div class="formularioGrupo" id="grupoPassword">
                    <div class="formularioGrupoInput">
                        <label for="cambiar-password" class="formularioLabel">Nueva clave</label>
                        <div class="input">
                            <input type="password" autocomplete="new-password" class="formularioInput" name="cambiar-password" id="cambiar-password" placeholder="Nueva Clave" >
                            <i class="fa fa-eye icono-toogle-clave-ingresar" data-input="cambiar-password"></i>
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
                        <label for="cambiar-password2" class="formularioLabel">Repetir clave</label>
                        <div class="input">
                            <input type="password" autocomplete="new-password" class="formularioInput" name="cambiar-password2" id="cambiar-password2" placeholder="Repetir clave">
                            <i class="fa fa-eye icono-toogle-clave-ingresar" data-input="cambiar-password2"></i>
                            <i class="iconoError fa-solid fa-circle-xmark"></i>
                        </div>
                    </div>
                    <div class="formularioGrupoMensajes ">
                        <p class="leyendaInput">Ambas claves deben ser iguales</p>
                        <p class="errorInput ocultarMsjInput">Error en confirmacion de clave</p>
                    </div>
                </div>
                    <button type="submit" class="formularioBtn">Enviar</button>
                    <p class="formularioMensajeExito"></p>
            </form>
        </div>`
    }
}
customElements.define('comp-form-ingresar', CompFormIngresar);