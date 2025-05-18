import React, { useState } from 'react'
import '../assets/style/style.css'

const Productos = ({ producto, agregarCarrito }) => {

    const [cantidad, setCantidad] = useState(1);

    const increase = () => setCantidad(prev => (prev < producto.stock ? prev + 1 : prev));
    const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <section className=' m-2 flex items-center justify-center bg-gray-100 flex-col align-center'>
            <div className="w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
                <div className='relative'>
                    <img src={producto.imagen} alt="" className='h-64 w-full rounded-lg object-cover' />
                </div>
                <div className="p-5 space-y-4">
                    <div>
                        <h3 className='text-xl font- text-gray-900 text-center'>{producto.nombre}</h3>
                        <div>
                            <div className='flex justify-end '>
                                <div className="space-y-4">
                                    <p className="text-lg font-bold text-blue-700">
                                        ${producto.precio}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-sm text-gray-600 mb-1">Stock: {producto.stock}</span>
                        </div>

                    </div>

                    <div className="flex align-center gap-2 mb-4">
                        <button className='qtyButton border-none px-3 rounded-lg cursor-pointer text-lg font-bold hover:bg-gray-400' onClick={decrease}>-</button>
                        <span className="font-bold">  {cantidad}  </span>
                        <button className='qtyButton border-none px-2 rounded-lg cursor-pointer text-lg font-bold hover:bg-gray-400' onClick={increase}>+</button>
                    </div>

                    <button className="w-full bg-indigo-500 hover:bg-indigo-800 border-amber-50 text-white font-medium py-3 rounded-lg transition-colors cursor-pointer active:border-indigo-300 border-8" onClick={() => agregarCarrito(producto,cantidad)}>Agregar al carrito</button>
                </div>
            </div>
        </section>
    )
}

export default Productos
