
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

                    <!--Submenú-->

                    <li class="nav__item dropdown">
                        <a href="#productos" class="nav__link dropdown-btn">
                            <i class='bx bx-cart nav__icon'></i>
                            <span class="nav__name">Productos y servicios</span>
                        </a>
                        <ul class="submenu_contenedor dropdown-content">
                            <li class="nav__item">
                                <a href="./index_producto_y_servicio.html" class="nav__link">
                                    <span class="nav__name">Productos</span>
                                </a>
                            </li>
                            <li class="nav__item">
                                <a href="./Servicios.html" class="nav__link">
                                    <span class="nav__name">Servicios</span>
                                </a>
                            </li>
                        </ul>
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