import React from 'react'
import { Link, useParams } from 'react-router-dom'

const DetalleProductos = ({ productos }) => {
    console.log(productos)

    const { id } = useParams()

    const product = productos.find(producto => producto.id == id)

    return (
        <div>
            {/* <h1>producto : {id}</h1> */}
            {
                product ? (
                    <div className="p-8 max-w-4xl mx-auto">
                        <Link to='/'>volver atras</Link>
                        <div className="bg-white rounded-xl shadow-md flex flex-col md:flex-row overflow-hidden">
                            <img src={product.imagen} alt={product.nombre} className="w-full md:w-1/2 object-cover" />
                            <div className="p-6 md:w-1/2 space-y-4">
                                <h1 className="text-3xl font-bold">{product.nombre}</h1>
                                <p className="text-gray-700 text-lg">{product.descripcion}</p>
                                <p className="text-xl text-blue-700 font-semibold">Precio: ${product.precio}</p>
                                {product.stock && (
                                    <p className="text-sm text-gray-500">Stock disponible: {product.stock}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Producto no Encontrado</p>
                )
            }
        </div>

    )
}

export default DetalleProductos
