import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from './estaticos/Footer'
import Header from './estaticos/Header'
import { CartContext } from '../context/CartContext'


const DetalleProductos = ({ producto }) => {
    const { productos, handleAddToCart } = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)
    const { id } = useParams()

    const product = productos.find(producto => producto.id == id)

    const increase = () => {
        if (cantidad < producto.stock) {
            setCantidad(prev => prev + 1);
        }
    };

    const decrease = () => {
        setCantidad(prev => (prev > 1 ? prev - 1 : prev));
    };

    if (!product) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h1 className="text-rune text-6xl font-extrabold">Detalle del producto: {id}</h1>
                <br />
                <p className="text-3xl">Producto no encontrado</p>
                <div className="mt-6">
                    <Link to="/" className="inline-block px-16 py-3 text-lg font-bold bg-dragon text-white rounded-xl hover:bg-rune hover:text-druid transition delay-100 duration-300 ease-in">← Pagina Anterior</Link>
                </div>
            </div>
        )
    }

    return (
        <>
            <Header />
            <div className="h-[91vh] pt-10">
                <div className="w-3/4 mx-auto rounded-2xl p-6 shadow-2xl border border-rune">
                    <div className="bg-[#f5f1e4] rounded-xl shadow-md flex flex-col md:flex-row overflow-hidden">
                        <img
                            src={product.imagen}
                            alt={product.nombre}
                            className="w-full md:w-1/2 object-cover h-96 md:h-auto"
                        />
                        <div className="p-6 md:w-1/2 flex flex-col justify-between space-y-6">
                            <div>
                                <h1 className="text-4xl font-bold text-red mb-2 text-[#866c17]">{product.nombre}</h1>
                                <p className="text-[#3e3e3e] text-lg">{product.descripcion}</p>
                                <p className="text-2xl text-[#866c17] font-semibold mt-4">${product.precio}</p>

                                <p>stock: {product.stock}</p>
                                <p>Categoría: {product.categoria}</p>


                                <div className="flex items-center gap-2 justify-center">
                                    <button
                                        className="bg-[#ccc7b6] px-3 text-black py-1 rounded-md text-3xl font-bold hover:bg-[#b9b49e]"
                                        onClick={decrease}
                                    >
                                        -
                                    </button>
                                    <span className="font-bold text-black text-3xl">{cantidad}</span>
                                    <button
                                        className="bg-[#ccc7b6] px-3 text-black py-1 rounded-md text-3xl font-bold hover:bg-[#b9b49e]"
                                        onClick={increase}
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    className="w-full bg-[#3e4e1e] hover:bg-[#567219] text-white font-semibold py-2 rounded-xl mt-3 transition-colors duration-300 border-2 border-[#3e4e1e] active:scale-95"
                                    onClick={() => handleAddToCart({ ...product, cantidad })}
                                >
                                    Agregar al carrito
                                </button>


                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <Link to="/" className="inline-block px-20 py-3 text-lg font-bold bg-forge text-black rounded-xl hover:bg-rune transition">← Volver atrás</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DetalleProductos
