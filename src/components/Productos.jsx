import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/style/style.css'
import { CartContext } from '../context/cartContext'

const Productos = ({ producto }) => {
    const [cantidad, setCantidad] = useState(producto.cantidad);
    const { handleAddToCart } = useContext(CartContext)

    const increase = () => {
        if (cantidad + producto.cantidad <= producto.stock) {
            setCantidad(prev => prev + 1);
        }
    };

    const decrease = () => {
        setCantidad(prev => (prev > 1 ? prev - 1 : prev))
    }

    return (
        <section className="w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm m-2 flex items-center justify-center">
            <div className="w-full h-[500px] overflow-hidden rounded-xl bg-[#f5f1e4] shadow-lg transition-all hover:shadow-2xl border border-[#d4c9a4] flex flex-col">
                <div className="relative h-64">
                    <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="w-full h-full object-cover rounded-t-xl"
                    />
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow">
                    <h3 className="text-2xl font-bold text-[#5c4c2d] text-center min-h-[56px]">
                        {producto.nombre}
                    </h3>

                    <div className="flex items-center gap-2 justify-center my-2">
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

                    <div className="flex justify-between items-center mt-2">
                        <p className="text-xl font-bold text-[#866c17]">${producto.precio}</p>
                        <Link
                            to={`/productos/${producto.id}`}
                            className="text-sm font-semibold text-[#3e4e1e] hover:underline"
                        >
                            Ver más
                        </Link>
                    </div>

                    <button style={{ display: cantidad == 0 ? 'none' : 'block' }}
                        className="w-full bg-[#3e4e1e] hover:bg-[#567219] text-white font-semibold py-2 rounded-xl mt-3 transition-colors duration-300 border-2 border-[#3e4e1e] active:scale-95"
                        onClick={() => handleAddToCart({ ...producto, cantidad: cantidad })}
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </section>

    )
}

export default Productos
