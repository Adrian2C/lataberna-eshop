import React from 'react'

const Cart = ({ cartItems }) => {
    return (
        <div>
            <h2>Carrito de compras</h2>
            {cartItems.length === 0 ? (<p>el carrito esta vacio</p>) :
                (<ul>
                    {cartItems.map((item, id) => (<li key={id} > {item.name} - ${item.price}</li>))}
                </ul>)}
            {/* <button onClick={() => addToCart(0, cart)}>Vaciar Carrito</button> */}
        </div>
    )
}

export default Cart
