
//Contenido del encabezado

let headerContent = `<header class="header" id="header">
        <nav class="nav container">
            <a href="#" class="nav__logo">Vet-Pet</a>

            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">

                    <li class="nav__item">
                        <a href="#home" class="nav__link active-link">
                            <i class='bx bx-home nav__icon'></i>
                            <span class="nav__name">Home</span>
                        </a>
                    </li>

                    <li class="nav__item">
                        <a href="#nosotros" class="nav__link">
                            <i class='bx bx-group nav__icon'></i>
                            <span class="nav__name">Nosotros</span>
                        </a>
                    </li>

                    <li class="nav__item">
                        <a href="#productos" class="nav__link">
                            <i class='bx bx-cart nav__icon' ></i>
                            <span class="nav__name">Productos y servicios</span>
                        </a>
                    </li>

                    <li class="nav__item">
                        <a href="#contacto" class="nav__link">
                            <i class='bx bx-envelope nav__icon'></i>
                            <span class="nav__name">Contacto</span>
                        </a>
                    </li>
                </ul>
            </div>
             <img src="./static/img/pet-house.png" alt="" class="nav__img">
        </nav>
    </header>`;

    //se agrega el contenido del encabezado al principio del body

    document.body.insertAdjacentHTML(`afterbegin`, headerContent);