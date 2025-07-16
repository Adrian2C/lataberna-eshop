import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Productos = ({ producto }) => {
    const { handleAddToCart } = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)
    const increase = () => {
        if (cantidad < producto.stock) {
            setCantidad(prev => prev + 1)
        }
    }
    const decrease = () => {
        setCantidad(prev => (prev > 1 ? prev - 1 : prev))
    }
    return (
        <article className="w-full max-w-xs sm:max-w-sm m-3 flex items-stretch">
            <div className="flex flex-col bg-pergamino text-bg rounded-2xl shadow-md hover:shadow-xl transition border border-forge/60 w-full overflow-hidden">
                <div className="relative h-64 w-full">
                    <img
                        src={producto.imagen}
                        alt={`Imagen de ${producto.nombre}`}
                        className="w-full h-full object-cover rounded-t-2xl"
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col flex-grow justify-between p-4 gap-3">
                    <h2 className="text-xl font-bold text-center text-dragon min-h-[56px]">
                        {producto.nombre}
                    </h2>
                    <div className="flex items-center justify-center gap-3">
                        <button
                            className="bg-forge px-3 py-1 rounded-md text-lg font-bold text-bg hover:bg-rune hover:text-pergamino transition"
                            onClick={decrease}
                            aria-label="Reducir cantidad"
                        >
                            -
                        </button>
                        <span className="text-lg font-semibold text-dragon">{cantidad}</span>
                        <button
                            className="bg-forge px-3 py-1 rounded-md text-lg font-bold text-bg hover:bg-rune hover:text-pergamino transition"
                            onClick={increase}
                            aria-label="Aumentar cantidad"
                        >
                            +
                        </button>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <p className="text-2xl font-bold text-dragon">${producto.precio}</p>
                        <Link
                            to={`/productos/${producto.id}`}
                            className="text-md font-semibold text-black hover:text-rune transition"
                            aria-label={`Ver más sobre ${producto.nombre}`}>
                            Ver más
                        </Link>
                    </div>

                    <button
                        aria-label={`Agregar ${producto.nombre} al carrito`}
                        className="font-semibold py-2 rounded-xl transition-colors duration-300 active:scale-95 bg-rune text-bg hover:text-pergamino hover:bg-dragon "
                        onClick={() => handleAddToCart({ ...producto, cantidad })
                    }
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </article>
    )
}
export default Productos