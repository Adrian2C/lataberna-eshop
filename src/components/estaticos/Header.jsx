import React, { useContext, useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import Cart from '../Cart'
import MenuMobile from '../MenuMobile'
import '../../assets/style/style.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [isCartOpen, setCartOpen] = useState(false)
    const { busqueda, setBusqueda } = useContext(CartContext)

    const searchRef = useRef(null)

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
            <nav className="w-full min-w-[290px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 relative">

                <Link to="/" className="text-2xl font-bold text-yellow-400">La Taberna</Link>

                <ul className="hidden md:flex gap-8 items-center font-bold">
                    <li><NavLink to='/' className='link'>Inicio</NavLink></li>
                    <li><NavLink to='/productos' className='link'>Productos</NavLink></li>
                    <li><NavLink to='/acercade' className='link'>Nosotros</NavLink></li>
                    <li><NavLink to='/contacto' className='link'>Contacto</NavLink></li>
                </ul>

                <div className="flex items-center gap-4 relative flex-row-reverse md:flex-row">

                    <button
                        className="md:hidden text-white hover:text-yellow-300 focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Abrir menú"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <button onClick={() => setCartOpen(true)} className="hover:text-yellow-300" aria-label="Abrir carrito">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </button>

                    <NavLink to='/admin' className='hover:text-yellow-300' aria-label="Ir al panel de administración">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </NavLink>
                </div>


                <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
            </nav>

            {menuOpen && (
                <MenuMobile
                    busqueda={busqueda}
                    setBusqueda={setBusqueda}
                    onClose={() => setMenuOpen(false)}
                />
            )}
        </header>
    )
}

export default Header
