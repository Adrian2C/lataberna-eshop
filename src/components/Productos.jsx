import React, { useState } from 'react'


const Productos = ({ producto, agregarCarrito }) => {

    const [cantidad, setCantidad] = useState(1);

    const increase = () => setCantidad(prev => (prev < product.stock ? prev + 1 : prev));
    const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <section className=' m-2 flex items-center justify-center bg-gray-100 p-4 flex-col align-center'>
            <div className="w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
                <div className='relative'>
                    <img src={producto.imagen} alt="" className='h-64 w-full rounded-lg object-cover' />
                </div>
                <div className="p-5 space-y-4">
                    <div>
                        <h3 className='text-xl font-bold text-gray-900 text-center'>{producto.nombre}</h3>
                        <div>
                            <div className='flex justify-between items-center'>
                                <div className="space-y-4">
                                    <p className="text-l font-bold text-gray-900">
                                        ${producto.precio}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center gap-1">
                            <span class="text-sm text-gray-600 ml-1">Stock: {producto.stock}</span>
                        </div>

                    </div>

                    <div>
                        <button className='bg-gray-300 border-none px-3 rounded-lg cursor-pointer text-lg font-bold hover:bg-gray-400' onClick={decrease}>-</button>
                        <span className="font-bold">  {cantidad}  </span>
                        <button className='bg-gray-300 border-none px-2 rounded-lg cursor-pointer text-lg font-bold hover:bg-gray-400' onClick={increase}>+</button>
                    </div>

                    <button className="w-full bg-indigo-500 hover:bg-indigo-800 border-amber-50 text-white font-medium py-3 rounded-lg transition-colors " onClick={() => agregarCarrito(producto)}>Agregar al carrito</button>
                </div>
            </div>
        </section>
    )
}

export default Productos
