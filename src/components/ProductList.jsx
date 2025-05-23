import React from 'react'
import Productos from './Productos'

const ProductList = ({ productos, agregarCarrito }) => {
    return (
        <>
            <div className="cardProdContainer backdrop-blur-md bg-gray-50/20 rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto p-6">
                {
                    productos.map(producto => (
                        <Productos key={producto.id} producto={producto} agregarCarrito={agregarCarrito} />
                    ))
                }
            </div>


        </>
    )
}

export default ProductList
