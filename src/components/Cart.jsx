import React from 'react';

const Cart = ({ cartItems, isCartOpen, toggleCart, clearCart, borrarProducto }) => {
<<<<<<< HEAD
=======


>>>>>>> refs/remotes/origin/main
    return (
        <div className={`cart-panel ${isCartOpen ? 'open' : ''}`}>
            <button onClick={toggleCart}>✖ Cerrar</button>
            <h2>Carrito</h2>
<<<<<<< HEAD
            <div className="cart-content">
                {cartItems.length === 0 ? (
                    <p>El carrito está vacío</p>
                ) : (
                    <>
                        <ul className="cart-list">
                            {cartItems.map(item => (
                                <li key={item.id} className="cart-item">
                                    {item.name} - ${item.price} - cant: {item.cantidad}
                                    <button onClick={() => borrarProducto(item)} aria-label="Eliminar producto">×</button>
                                </li>
                            ))}
                        </ul>
                        <button onClick={clearCart}>🗑️ Vaciar carrito</button>
                    </>
                )}
            </div>
=======
            {cartItems.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <ul className="cart-list">
                    {cartItems.map((item, index) => (
                        <>
                            <li key={index} className="cart-item">{item.name} - ${item.price} cant:{item.cantidad}</li>
                            <button onClick={() => borrarProducto(item)}>x</button>
                        </>
                    ))}
                </ul>
            )}

            <button onClick={clearCart}>🗑️ vaciar</button>
>>>>>>> refs/remotes/origin/main
        </div>
    );
};

export default Cart;
