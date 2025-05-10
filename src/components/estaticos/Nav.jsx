import React from 'react';
import '../assets/style/style.css';
import Cart from '../Cart';
/* import { Link } from 'react-router-dom'; */

const Nav = ({ countItem, toggleCart, cartItems, borrarProducto, clearCart }) => {
    return (
        <nav style={{ backgroundColor: '#52393975', color: ' white', padding: '10px', position: 'fixed', width: '100vw' }}>
            <ul className="nav-list">
                <li><a href="#">Inicio</a></li>
                {/* <li><Link to ='/AcercaDe'>Acerca De</Link></li> */}
                <li>Contacto</li>
                <li style={{ cursor: 'pointer' }} onClick={toggleCart}>
                    Carrito 🛒: ({countItem})
                </li>
                <li className="cartNav">
                    <Cart
                        cartItems={cartItems}
                        isCartOpen={false} // siempre visible en Nav, opcional
                        toggleCart={toggleCart}
                        clearCart={clearCart}
                        borrarProducto={borrarProducto}
                    />
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
