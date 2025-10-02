class CompContactanos extends HTMLElement {
    constructor(){
    super();
    this.innerHTML = 
    `<div class="contactos">
        <div class="datos">
            <div class="titulo">
                <i class="fa-solid fa-location-dot"></i>
                <h2>Direcccion: </h2>
            </div>
            <div class="cuerpo">
                Av. 7 entre calles 15 y 16, Centro Comercial Bien, planta baja, local #5. San Felipe. Estado Yaracuy.
            </div>
        </div>

        <div class="datos">
            <div class="titulo">
                <i class="fa-solid fa-clock"></i>
                <h2>Horarios: </h2>
            </div>
            <div class="cuerpo">
                <b>Lunes a sabado: </b>8:00 am a 7:00pm horario corrido.
            </div>
        </div>
        <div class="datos">
            <div class="titulo">
                <i class="fa-brands fa-whatsapp"></i>
                <h2>Whatsapp: </h2>
            </div>
            <div class="cuerpo">
                <a href="https://wa.me/584141234567" target="_blank"><b>+58 414 12345678</b></a>
            </div>
        </div>
        <div class="datos">
            <div class="titulo">
                <i class="fa-solid fa-envelope"></i>
                <h2>Email: </h2>
            </div>
            <div class="cuerpo">
                <a href="mailto:contacto@tudominio.com"><b>ventas@computech.com</b></a>
            </div>
        </div>
    </div>
    <div class="mapa">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1582.8530572692332!2d-68.7405297731939!3d10.33754602202483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e80cf4a79df2bcb%3A0xf5b6a4f2849efd8d!2s87Q6%2B49V%2C%20Calle%2015%2C%20San%20Felipe%203201%2C%20Yaracuy!5e0!3m2!1ses-419!2sve!4v1759431019690!5m2!1ses-419!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="map"></iframe>
    </div>`
    };
}
customElements.define('comp-contactanos', CompContactanos);