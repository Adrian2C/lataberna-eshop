import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from './estaticos/Footer'


const DetalleProductos = ({ productos, agregarCarrito }) => {
    const { id } = useParams()
    const product = productos.find(producto => producto.id == id)
    const [cantidad, setCantidad] = useState(1)

    const increase = () => setCantidad(prev => (prev < product.stock ? prev + 1 : prev))
    const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1))

    return (
        <div className="section bg-[#567219b4] pt-10">
            {product ? (
                <div className="max-w-5xl mx-auto bg-[#3c4c1ab4] rounded-2xl p-6 shadow-2xl border border-[#6a7f3a]">
                    <div className="mb-6">
                        <Link
                            to="/"
                            className="inline-block px-6 py-3 text-lg font-bold bg-[#3e4e1e] text-white rounded-xl hover:bg-[#567219] transition"
                        >
                            ← Volver atrás
                        </Link>
                    </div>

                    <div className="bg-[#f5f1e4] rounded-xl shadow-md flex flex-col md:flex-row overflow-hidden border border-[#d4c9a4]">
                        <img
                            src={product.imagen}
                            alt={product.nombre}
                            className="w-full md:w-1/2 object-cover h-96 md:h-auto"
                        />

                        <div className="p-6 md:w-1/2 flex flex-col justify-between space-y-6">
                            <div>
                                <h1 className="text-4xl font-bold text-red mb-2 text-[#866c17]">{product.nombre}</h1>
                                <p className="text-[#3e3e3e] text-lg">{product.descripcion}</p>
                                <p className="text-2xl text-[#866c17] font-semibold mt-4">Precio: ${product.precio}</p>
                                {product.stock && (
                                    <p className="text-sm text-gray-600">Stock disponible: {product.stock}</p>
                                )}
                            </div>

                            <div className="flex items-center gap-4 mt-4">
                                <button
                                    onClick={decrease}
                                    className="qtyButton"
                                >
                                    -
                                </button>
                                <span className="font-bold text-lg text-[#8c2929]">{cantidad}</span>
                                <button
                                    onClick={increase}
                                    className="qtyButton"
                                >
                                    +
                                </button>

                                <button
                                    onClick={() => agregarCarrito(product, cantidad)}
                                    className="ml-auto bg-[#3e4e1e] hover:bg-[#567219] text-white font-semibold px-6 py-2 rounded-xl transition"
                                >
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-center text-white text-xl">Producto no encontrado</p>
            )}
            <Footer />
        </div>
    )
}

export default DetalleProductos
