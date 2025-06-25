import React, { useContext } from 'react'
import Productos from './Productos'
import { CartContext } from '../context/cartContext'

const ProductList = () => {

    const { productos, productosFiltrados } = useContext(CartContext)

    return (
        <>

            {/* <input className='bg-red-500 border-2 m-3 ps-2'
                type="text"
                placeholder='buscar productos'
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            /> */}
            <div className="cardProdContainer backdrop-blur-md bg-gray-50/20 rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto p-6">
                {
                    productosFiltrados.map(producto => (
                        <Productos key={producto.id} producto={producto} />
                        //  <Productos key={producto.id} producto={producto} agregarCarrito={agregarCarrito} />
                    ))
                }
            </div>


        </>
    )
}

export default ProductList
