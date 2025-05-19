import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import '../assets/style/style.css'

const Productos = ({ producto, agregarCarrito }) => {

    const [cantidad, setCantidad] = useState(1);

    const increase = () => setCantidad(prev => (prev < producto.stock ? prev + 1 : prev));
    const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <section className=' m-1 flex items-center justify-center flex-col align-center'>
            <div className="w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
                <div className='relative'>
                    <img src={producto.imagen} alt="" className='h-64 w-full rounded-lg object-cover' />
                </div>
                <div className="p-5 space-y-4">
                    <div>
                        <h3 className='text-xl font-bold text-gray-700 text-center'>{producto.nombre}</h3>



                        {/*   <div className="flex items-center gap-1">
                            <span className="text-sm text-gray-600 mb-1">Stock: {producto.stock}</span>
                        </div> */}
                    </div>

                    <div className="flex align-center gap-2 mb-4">
                        <button className='qtyButton border-none px-3 rounded-lg cursor-pointer text-lg font-bold hover:bg-gray-400' onClick={decrease}>-</button>
                        <span className="font-bold">  {cantidad}  </span>
                        <button className='qtyButton border-none px-2 rounded-lg cursor-pointer text-lg font-bold hover:bg-gray-400' onClick={increase}>+</button>
                        <div className="w-100 flex justify-end">

                            <Link to={`/productos/${producto.id}`} className="text-blue-700 text-lg hover:underline">Ver mas </Link>
                        </div>
                    </div>
                    <div className='flex  '>
                        <div className="flex items-center">
                            <p className="text-xl font-bold text-blue-700">
                                ${producto.precio}
                            </p>
                        </div>
                        <button className="w-50 bg-indigo-500 rounded-2xl hover:bg-indigo-800 text-white font-medium py-3 transition-colors cursor-pointer active:border-indigo-300 border-4" onClick={() => agregarCarrito(producto, cantidad)}>Agregar al carrito</button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Productos
