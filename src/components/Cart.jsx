import React from "react";

const Cart = ({ cartItems, isCartOpen, toggleCart, clearCart, borrarProducto }) => {


    return (
        <div className={`cart-panel ${isCartOpen ? 'open' : ''}`}>
            <button onClick={toggleCart}>✖ Cerrar</button>
            <h2>Carrito</h2>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <ul className="cart-list">
                    {cartItems.map((item, index) => (
                        <>
                            <li key={index} className="cart-item">{item.nombre} - ${item.precio} cant:{item.cantidad}

                                <button onClick={() => borrarProducto(item)}>x</button>
                            </li>
                        </>
                    ))}
                </ul>
            )}

            <button onClick={clearCart}>🗑️ vaciar</button>
        </div>
    );
};

export default Cart;

