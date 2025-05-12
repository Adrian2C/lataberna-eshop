import React, { useState } from 'react'


const Productos = ({ producto, agregarCarrito }) => {

    const [cantidad, setCantidad] = useState(1);

    const increase = () => setCantidad(prev => (prev < product.stock ? prev + 1 : prev));
    const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <section className='flex flex-col items-center p-7 rounded-2xl'>
            <div className='size-48 shadow-xl rounded-md'>
                <img src={producto.imagen} alt="" className='imagen' />
            </div>

            <h3 className='nombre'>{producto.nombre}</h3>
            <p className='precio'>${producto.precio}</p>
            <p className='stock'>{producto.stock}</p>

            <div className='cantidadContainer'>
                <button className='bg-gray-300 border-none px-3 py-1 rounded-lg cursor-pointer text-lg font-bold hover:bg-gray-400' onClick={decrease}>-</button>
                <span>{cantidad}</span>
                <button className='bg-gray-300 border-none px-3 py-1 rounded-lg cursor-pointer text-lg font-bold hover:bg-gray-400' onClick={increase}>+</button>
            </div>

            <button className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-orange-400 px-8 py-1 text-base font-medium text-white hover:bg-orange-800 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-hidden" onClick={() => agregarCarrito(producto)}>Agregar al carrito</button>

        </section>
    )
}

export default Productos
