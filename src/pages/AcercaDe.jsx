import React, { useContext } from 'react';
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';
import cargando from '../assets/images/loading.gif';
import { CartContext } from '../context/CartContext';
import { Helmet } from 'react-helmet-async';

const AcercaDe = () => {
    const { equipo, loadingEquipo, errorEquipo } = useContext(CartContext);

    return (
        <>
            <Helmet>
                <html lang="es" />
                <title>Acerca de | La Taberna del Rol</title>
                <meta name="description" content="Conocé al equipo detrás de La Taberna del Rol. Nuestra pasión por el rol, la fantasía y la comunidad." />
                <meta property="og:title" content="Nuestro Equipo - La Taberna del Rol" />
                <meta property="og:description" content="Descubrí quiénes están detrás de este proyecto. Guías, aventuras y pasión por el rol." />
                <meta property="og:type" content="website" />
            </Helmet>

            <Header />

            <main className="min-h-screen px-4 py-16 text-pergamino">
                {loadingEquipo ? (
                    <div className="flex justify-center items-center h-screen">
                        <img src={cargando} alt="Cargando equipo" className="w-24 h-auto" />
                    </div>
                ) : (
                    <section className="max-w-6xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-rune mb-4 bg-dragon py-4">Nuestro Equipo</h1>
                        <p className="text-lg text-forge mb-12">
                            Conocé a las personas detrás de este proyecto.
                        </p>

                        {errorEquipo && (
                            <p className="text-red-500 font-semibold mb-6">{errorEquipo}</p>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {equipo.map((persona) => (
                                <div
                                    key={persona.id}
                                    className="bg-forge/30 p-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-dragon hover:bg-rune/20 transition border border-forge text-center"
                                >
                                    <img
                                        src={persona.imagen}
                                        alt={`Foto de ${persona.nombre}`}
                                        className="rounded-full mx-auto mb-4 w-28 h-28 object-cover border-4 border-rune"
                                    />
                                    <h2 className="text-2xl font-extrabold text-pergamino">{persona.nombre}</h2>
                                    <p className="text-sm text-pergamino">{persona.rol}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </>
    );
};

export default AcercaDe;
