class Footer extends HTMLElement {
    constructor(){
        super();
        this.innerHTML =
        `<footer>
            <div class="copyrigth">
                <p>creado Albie Silva 2025</p>
            </div>
            <div class="redes">
                    <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                        <span>Instagram</span>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-facebook"></i>
                        <span>Facebook</span>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-x-twitter"></i>
                        <span>X-Twitter</span>
                    </a>
            </div>
        </footer>`
    }
}
customElements.define('comp-footer', Footer);
