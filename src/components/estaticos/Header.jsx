import React, { useContext, useState } from 'react'
//navlink marca la pagina actual en la que uno se encuentra
import { Link, NavLink } from 'react-router-dom'
import '../../assets/style/style.css'
import Cart from '../Cart'


const Header = () => {
    const [isCartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <nav className=" w-full py-4 z-100  bg-bg">
                <ul classsName="flex ">
                    <li><NavLink to='/' className='link'>Inicio</NavLink></li>
                    <li><NavLink to='/productos' className='link'>Nuestros Productos</NavLink></li>
                    <li><NavLink to='/acercade' className='link'>Sobre nosotros</NavLink></li>
                    <li><NavLink to='/contacto' className='link'>Contacto</NavLink></li>
                    <li ><NavLink to='/Login' className='link'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    </NavLink></li>
                    <li className='cartnav close'>
                        <button className='bg-transparent border-none' onClick={() => setCartOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </button>
                        <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
