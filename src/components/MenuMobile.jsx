// src/components/MenuMobile.jsx
import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuMobile = ({ busqueda, setBusqueda, onClose }) => {
    return (
        <div className="md:hidden bg-[#1e1e1e] px-4 pb-4">
            <div className="mt-2">
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="w-full mb-4 bg-white text-black px-3 py-2 rounded-md border focus:outline-none"
                />
                <ul className="flex flex-col gap-2 font-bold">
                    <li>
                        <NavLink to="/" className="block py-1 text-yellow-300" onClick={onClose}>
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/productos" className="block py-1 text-yellow-300" onClick={onClose}>
                            Productos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/acercade" className="block py-1 text-yellow-300" onClick={onClose}>
                            Nosotros
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" className="block py-1 text-yellow-300" onClick={onClose}>
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuMobile
