class SubCompCarrusel extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = 
        `<div>
            <div class="carrusel-hero ">
                <div class="sec-hero">
                    <img src="/admin/img/carrusel-1.avif" alt="">
                    <div class="txt-hero">
                        <div class="titulo-hero">
                            Audio
                            <span class="linea-inferior"></span>
                        </div>
                
                        <div class="desc-hero">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, minus. Vel odio aperiam officiis eveniet similique hic, blanditiis quos beatae soluta placeat, consequatur cupiditate veniam quas maxime quae quidem corporis.</p>
                        </div>
                    </div>
                </div>
                <div class="sec-hero ">
                    <img src="/admin/img/carrusel-2.avif" alt="">
                    <div class="txt-hero">
                        <div class="titulo-hero">
                            Tecnologia
                            <span class="linea-inferior"></span>
                        </div>
                        <div class="desc-hero">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, minus. Vel odio aperiam officiis eveniet similique hic, blanditiis quos beatae soluta placeat, consequatur cupiditate veniam quas maxime quae quidem corporis.</p>
                        </div>
                    </div>
                </div>
                <div class="sec-hero">
                    <img src="/admin/img/carrusel-3.avif" alt="">
                    <div class="txt-hero">
                        <div class="titulo-hero">
                            Laptops
                            <span class="linea-inferior"></span>
                        </div>
                        <div class="desc-hero">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, minus. Vel odio aperiam officiis eveniet similique hic, blanditiis quos beatae soluta placeat, consequatur cupiditate veniam quas maxime quae quidem corporis.</p>
                        </div>
                    </div>
                </div>
                <div class="sec-hero">
                    <img src="/admin/img/carrusel-4.avif" alt="">
                    <div class="txt-hero">
                        <div class="titulo-hero">
                            Ergnomia
                            <span class="linea-inferior"></span>
                        </div>
                        <div class="desc-hero">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, minus. Vel odio aperiam officiis eveniet similique hic, blanditiis quos beatae soluta placeat, consequatur cupiditate veniam quas maxime quae quidem corporis.</p>
                        </div>
                    </div>
                </div>
                <div class="sec-hero">
                    <img src="/admin/img/carrusel-5.avif" alt="">
                    <div class="txt-hero">
                        <div class="titulo-hero">
                            Delivery
                            <span class="linea-inferior"></span>
                        </div>
                        <div class="desc-hero">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, minus. Vel odio aperiam officiis eveniet similique hic, blanditiis quos beatae soluta placeat, consequatur cupiditate veniam quas maxime quae quidem corporis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
}
customElements.define('sub-comp-carrusel', SubCompCarrusel);