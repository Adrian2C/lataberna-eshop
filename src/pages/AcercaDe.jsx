import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import equipo from '../utils/member.json'

const AcercaDe = ({ cart, borrarProducto }) => {
    return (
        <>
            <Header borrarProducto={borrarProducto} cartItems={cart} />

            <div className="section bg-[#567219b4] rounded-xl p-4">
                <h2 className="text-[#D4AF37] text-3xl font-bold text-center my-10">Nuestro Equipo</h2>
                <p className="text-[#F5EBD0] text-center mt-4">Conoce a nuestro equipo</p>

                <div className="cardAbout">
                    {equipo.map((persona) => (
                        <div
                            key={persona.id}
                            className="bg-[#3D6B3D] shadow-md shadow-black rounded-xl p-6 text-center hover:bg-[#2f5530] transition"
                        >
                            <img
                                src={persona.imagen}
                                alt={persona.nombre}
                                className="rounded-full mx-auto mb-4 w-32 h-32 object-cover border-4 border-[#D4AF37]"
                            />
                            <h3 className="text-lg font-semibold text-[#F5EBD0]">{persona.nombre}</h3>
                            <p className="text-[#BBAC88]">{persona.cargo}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default AcercaDe
