import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../assets/style/style.css'

const Productos = ({ producto, agregarCarrito }) => {
    const [cantidad, setCantidad] = useState(1)

    const increase = () => setCantidad(prev => (prev < producto.stock ? prev + 1 : prev))
    const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1))

    return (
        <section className="m-2 flex items-center justify-center flex-col">
            <div className="w-full max-w-sm overflow-hidden rounded-xl bg-[#f5f1e4] shadow-lg transition-all hover:shadow-2xl border border-[#d4c9a4]">
                <div className="relative">
                    <img src={producto.imagen} alt={producto.nombre} className="h-64 w-full object-cover rounded-t-xl" />
                </div>

                <div className="p-5 space-y-4">
                    <h3 className="text-2xl font-bold text-[#5c4c2d] text-center">{producto.nombre}</h3>

                    <div className="flex items-center gap-2 justify-center">
                        <button
                            className="bg-[#ccc7b6] px-3 py-1 rounded-md text-lg font-bold hover:bg-[#b9b49e] transition"
                            onClick={decrease}
                        >
                            -
                        </button>
                        <span className="font-bold text-[#8c2929]">{cantidad}</span>
                        <button
                            className="bg-[#ccc7b6] px-3 py-1 rounded-md text-lg font-bold hover:bg-[#b9b49e] transition"
                            onClick={increase}
                        >
                            +
                        </button>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="text-xl font-bold text-[#D4AF37]">${producto.precio}</p>
                        <Link
                            to={`/productos/${producto.id}`}
                            className="text-sm font-semibold text-[#3e4e1e] hover:underline"
                        >
                            Ver más
                        </Link>
                    </div>

                    <button
                        className="w-full bg-[#3e4e1e] hover:bg-[#567219] text-white font-semibold py-2 rounded-xl mt-2 transition-colors duration-300 border-2 border-[#3e4e1e] active:scale-95"
                        onClick={() => agregarCarrito(producto, cantidad)}
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Productos
