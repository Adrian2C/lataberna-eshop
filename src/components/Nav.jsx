import React from 'react';
import '../assets/style/style.css'

const Nav = ({ countItem, toggleCart }) => {

    return (
        <nav style={{ backgroundColor: '#333', color: 'white', padding: '10px' }}>
            <ul className="nav-list">
                {/* <img src={logo} /> */}
                <li ><a href="#">Inicio</a></li>
                <li>Acerca De</li>
                <li>Contacto</li>
                <li style={{ cursor: 'pointer' }} onClick={toggleCart}>Carrito 🛒:({countItem})</li>
            </ul>
        </nav>
    )
}

export default Nav
