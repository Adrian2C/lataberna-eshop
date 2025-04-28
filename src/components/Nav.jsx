import React from 'react';
import '../assets/style/style.css'

const Nav = ({ countItem }) => {

    return (
        <nav style={{ backgroundColor: '#333', color: 'white', padding: '10px' }}>
            <ul>
                {/* <img src={logo} /> */}
                <li ><a href="#">Inicio</a></li>
                <li>Acerca De</li>
                <li>Contacto</li>
                <li>Carrito:{countItem}</li>
            </ul>
        </nav>
    )
}

export default Nav
