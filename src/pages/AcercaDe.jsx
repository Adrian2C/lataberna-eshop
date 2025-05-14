import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'

import equipo from '../utils/member.json'

const AcercaDe = ({ cart, borrarProducto }) => {
    return (
        <>
            <Header borrarProducto={borrarProducto} cartItems={cart} />

            <div className="bg-gray-100 rounded-xl p-4 w-full h-full ">
                <h2 className="text-gray-700 text-3xl font-bold text-center my-10">Nuestro Equipo</h2>
                <p className="text-gray-500 text-center mt-4">Conoce a nuestro equipo</p>

                <div className="cardAbout">
                    {equipo.map((persona) => (
                        <div key={persona.id} className="bg-white shadow-md rounded-xl p-6 text-center">
                            <img src={persona.imagen} alt={persona.nombre} className="rounded-full mx-auto mb-4 w-32 h-32 object-cover" />
                            <h3 className="text-lg font-semibold text-gray-800">{persona.nombre}</h3>
                            <p className="text-gray-500">{persona.cargo}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AcercaDe
