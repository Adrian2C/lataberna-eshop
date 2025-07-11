import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from './estaticos/Footer'
import Header from './estaticos/Header'
import { CartContext } from '../context/CartContext'

const DetalleProductos = () => {
    const { productos, handleAddToCart } = useContext(CartContext)
    const { id } = useParams()
    const [cantidad, setCantidad] = useState(1)

    const product = productos.find(p => p.id == id)

    const increase = () => {
        if (product && cantidad < product.stock) {
            setCantidad(prev => prev + 1)
        }
    }

    const decrease = () => {
        setCantidad(prev => (prev > 1 ? prev - 1 : prev))
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-rune text-5xl font-bold mb-4">Detalle del producto: {id}</h1>
                <p className="text-xl text-pergamino mb-6">Producto no encontrado</p>
                <Link
                    to="/"
                    className="px-8 py-3 text-lg font-bold bg-dragon text-pergamino rounded-xl hover:bg-rune hover:text-bg transition"
                >
                    ← Página anterior
                </Link>
            </div>
        )
    }

    return (
        <>
            <Header />
            <main className="min-h-screen pt-24 pb-16 px-4 bg-druid">
                <div className="max-w-6xl mx-auto rounded-2xl p-4 shadow-2xl border border-forge/50 bg-pergamino">
                    {/* Botón de regreso */}
                    <div className="mb-2">
                        <Link
                            to="/"
                            className="block w-fit px-10 py-3 text-lg font-bold bg-forge text-bg rounded-xl hover:bg-dragon hover:text-pergamino transition"
                        >
                            ← Volver atrás
                        </Link>
                    </div>
                    <section className="flex flex-col md:flex-row overflow-hidden rounded-xl shadow-md">
                        {/* Imagen */}
                        <div className="w-full md:w-1/2 h-96 md:h-auto">
                            <img
                                src={product.imagen}
                                alt={`Imagen de ${product.nombre}`}
                                className="w-full h-full object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl"
                            />
                        </div>

                        {/* Info */}
                        <div className="p-6 md:w-1/2 flex flex-col justify-between space-y-6">
                            <div>
                                <h1 className="text-4xl font-bold text-dragon mb-2">{product.nombre}</h1>
                                <p className="text-lg text-bg mb-4">{product.descripcion}</p>

                                <p className="text-bg font-medium">Stock disponible: <span className="font-bold">{product.stock}</span></p>
                                <p className="text-4xl font-semibold text-black mt-2">${product.precio}</p>

                                {/* Controles de cantidad */}
                                <div className="flex items-center gap-4 justify-center mt-6">
                                    <button
                                        className="bg-forge text-bg px-4 py-1 rounded-md text-2xl font-bold hover:bg-rune hover:text-pergamino transition"
                                        onClick={decrease}
                                        aria-label="Reducir cantidad"
                                    >
                                        −
                                    </button>
                                    <span className="text-2xl font-bold text-dragon">{cantidad}</span>
                                    <button
                                        className="bg-forge text-bg px-4 py-1 rounded-md text-2xl font-bold hover:bg-rune hover:text-pergamino transition"
                                        onClick={increase}
                                        aria-label="Aumentar cantidad"
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    className="w-full mt-6 py-3 font-semibold rounded-xl transition-colors duration-300 bg-rune hover:bg-dragon text-bg hover:text-pergamino hover:bg-dragonactive:scale-95"
                                    onClick={() => handleAddToCart({ ...product, cantidad })}
                                >
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </section>

                    
                </div>
            </main>
            <Footer />
        </>
    )
}

export default DetalleProductos
