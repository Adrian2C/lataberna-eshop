import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/style/style.css'
import Cart from '../Cart'


const Header = ({ cartItems, borrarProducto }) => {
    const [isCartOpen, setCartOpen] = useState(false)


    return (
        <header>
            <nav className="bg-gray-900 text-white p-3">
                <ul classsName="flex">
                    <li><Link to='/' className='link'>Inicio</Link></li>
                    <li><Link to='/acercade' className='link hover:bg-red-50  transition-all p-2 rounded-lg'>Sobre nosotros</Link></li>
                    <li><Link to='/productos' className='link'>Galeria de productos</Link></li>
                    <li><Link to='/contacto' className='link'>Contacto</Link></li>
                    <li className='cartnav'>
                        <button className='bg-transparent border-none' onClick={() => setCartOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </button>
                        <Cart borrarProducto={borrarProducto} cartItems={cartItems} isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
