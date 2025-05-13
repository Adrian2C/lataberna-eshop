import React from 'react'


const Cart = ({ cartItems, isOpen, onClose, borrarProducto }) => {

    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className='flex justify-between align-center p-4 border-b-2 border-gray-500'>
                <h2 className="text-black">Carrito de Compras</h2>
                <button onClick={onClose} className='bg-none border-none text-xl cursor-pointer'>X</button>
            </div>
            <div className='cart-content'>
                {cartItems.length === 0 ? (<p style={{ color: 'red' }}>El carrito esta vacío</p>) : (<ul className='cart-item'>
                    {cartItems.map((item, index) => (
                        <>
                            <li key={item.id} style={{ color: 'black' }}>
                                {item.nombre} - {item.precio}
                                <button onClick={() => borrarProducto(item)}><i className="fa-solid fa-trash"></i></button>
                            </li>
                        </>
                    ))}
                </ul>)}

            </div>

        </div>
    )
}

export default Cart
