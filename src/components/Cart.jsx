import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import '../assets/style/style.css'

const Cart = ({ isOpen, onClose }) => {
    const { cart, handleDeleteFromCart } = useContext(CartContext)

    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className='flex justify-between align-center p-4 border-b-2 border-gray-500'>
                <h2 className="text-black text-lg font-bold">Carrito de Compras</h2>
                <button onClick={onClose} className='text-xl text-black close'>X</button>
            </div>

            <div className='p-4'>
                {cart.length === 0 ? (
                    <p className="text-red-500">El carrito esta vacío</p>
                ) : (
                    <>
                        <ul className="flex flex-col gap-4">

                            {cart.map((item, index) => (
                                <>
                                    <li key={item.id} className="flex items-center justify-between gap-4 border-b pb-2 text-black min-h-[80px] ">
                                        {item.imagen && (
                                            <img src={item.imagen}
                                                alt={item.nombre}
                                                className='w-20 h-20 object-cover rounded'
                                            />
                                        )}
                                        <div className='flex flex-col flex-1 min-w-[150px]'>
                                            <p className='text-black font-semibold break-words'>{item.nombre}</p>
                                            <p className='text-sm text-gray-600'>cant: {item.cantidad}</p>

                                            <p className='text-sm text-gray-600'> ${item.precio}</p>
                                        </div>

                                        <button onClick={() => handleDeleteFromCart(item)} className="w-8 h-8 flex justify-center items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-400 hover:text-red-900">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </button>
                                    </li>
                                </>
                            ))}
                        </ul>
                        <div className="cart-footer">
                            <p>
                                Total: ${cart.reduce((total, item) => total + (item.precio * item.cantidad), 0)}
                            </p>
                            <button className="rounded-lg bg-[#435a12b4] text-gray-200 text-lg font-bold py-2 w-full hover:bg-[#3e4e1e] btnCheckout">Finalizar Compra</button>
                        </div>
                    </>)}
            </div>
        </div>
    )
}

export default Cart
