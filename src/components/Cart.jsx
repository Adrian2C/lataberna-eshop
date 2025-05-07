import React from 'react';

const Cart = ({ cartItems, isCartOpen, toggleCart, clearCart, borrarProducto }) => {
    return (
        <div className={`cart-panel ${isCartOpen ? 'open' : ''}`}>
            <button onClick={toggleCart}>✖ Cerrar</button>
            <h2>Carrito</h2>
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
        </div>
    );
};

export default Cart;
