import React, { useContext, useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import Cart from '../Cart'
import '../../assets/style/style.css'

const Header = () => {
    const [showSearch, setShowSearch] = useState(false)
    const [isCartOpen, setCartOpen] = useState(false)
    const { busqueda, setBusqueda } = useContext(CartContext)

    const searchRef = useRef(null)

    // Oculta input de búsqueda al hacer clic afuera
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setShowSearch(false)
            }
        }

        if (showSearch) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showSearch])

    return (
        <header className="bg-[#1e1e1e] text-white fixed top-0 left-0 w-full shadow-lg z-50">
            <nav className="w-full max-w-[1200px] min-w-[290px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-yellow-400">La Taberna</Link>

                {/* Enlaces centrales */}
                <ul className="hidden md:flex gap-6 items-center">
                    <li><NavLink to='/' className='link'>Inicio</NavLink></li>
                    <li><NavLink to='/productos' className='link'>Productos</NavLink></li>
                    <li><NavLink to='/acercade' className='link'>Nosotros</NavLink></li>
                    <li><NavLink to='/contacto' className='link'>Contacto</NavLink></li>
                </ul>

                {/* Iconos derecha */}
                <div className="flex items-center gap-4 relative">

                    {/* Búsqueda */}
                    <div ref={searchRef} className="relative">
                        {!showSearch ? (
                            <button onClick={() => setShowSearch(true)} className="hover:text-yellow-300 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                        ) : (
                            <input
                                type="text"
                                placeholder="Buscar..."
                                value={busqueda}
                                onChange={(e) => setBusqueda(e.target.value)}
                                className="absolute -top-5 right-0 mt-2 w-48 bg-white text-black px-3 py-1 rounded-md shadow-md border focus:outline-none transition-all duration-300"
                            />
                        )}
                    </div>

                    {/* Carrito */}
                    <button onClick={() => setCartOpen(true)} className="hover:text-yellow-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </button>

                    {/* Login */}
                    <NavLink to='/admin' className='hover:text-yellow-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </NavLink>
                </div>

                {/* Cart Sidebar */}
                <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
            </nav>
        </header>
    )
}

export default Header
