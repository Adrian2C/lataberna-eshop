import React, { useEffect, useState } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import cargando from '../assets/images/loading.gif'

const AcercaDe = ({ cart, borrarProducto }) => {

    const [equipo, setEquipo] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://6812b137129f6313e20f46de.mockapi.io/productos-ecommerce/productos')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setEquipo(datos)
                setLoading(false)
            })
            .catch((error) => {
                setError('hubo un Problema al cargar al team.')
                setLoading(false);
            })
    },
        [])

    return (
        <>
            <Header borrarProducto={borrarProducto} cartItems={cart} />

            {loading ? (<div className="flex justify-center items-center h-dvh">
                <img src={cargando} alt="loading" className="h-auto w-32" />
            </div>) : (
                <div className="section bg-[#567219b4] rounded-xl p-4 ">
                    <h2 className="text-[#D4AF37] text-3xl font-bold text-center my-10">Nuestro Equipo</h2>
                    <p className="text-[#F5EBD0] text-center mt-2 py-2 bg-[#3a4e10b4]">Conoce a nuestro equipo</p>

                    <div>
                        {error && (
                            <p className="text-center text-red-500 font-bold mt-4">{error}</p>
                        )}
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
                                    <p className="text-[#BBAC88]">{persona.rol}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            )}
            <Footer />
        </>
    )
}

export default AcercaDe
