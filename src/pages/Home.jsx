import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';
import ProductList from '../components/ProductList';
import loading from '../assets/images/loading.gif';
import { CartContext } from '../context/CartContext';
import bgImage from '../assets/images/bg.jpg';
import { Helmet } from 'react-helmet-async'; 

const Home = () => {
    const { cargando } = useContext(CartContext);
    const bannerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!bannerRef.current) return;
            const offset = window.scrollY;
            bannerRef.current.style.backgroundPositionY = `${offset * 0.5}px`;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Helmet>
                <html lang="es" />
                <title>Inicio | La Taberna del Rol</title>
                <meta
                    name="description"
                    content="Explora builds, guías y artefactos para potenciar tu aventura de rol. Encuentra todo lo que necesitas para tu próxima partida."
                />
                <meta property="og:title" content="La Taberna del Rol" />
                <meta property="og:description" content="Guías, builds y mapas para tus juegos de rol favoritos." />
                <meta property="og:image" content="URL_DE_TU_IMAGEN_DESTACADA" />
                <meta property="og:type" content="website" />
            </Helmet>

            <Header />
            <main>
                <section
                    ref={bannerRef}
                    className="relative min-h-[90dvh] bg-fixed bg-center bg-cover flex items-center justify-center"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundAttachment: 'scroll',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}
                >
                    <div className="absolute inset-0 bg-black/40 " />
                    <div className="relative z-20 flex flex-col items-center justify-center gap-8 h-full text-center text-parchment px-4">
                        <p className="text-main">Guías, Mapas, builds y artefactos para llevar tu partida al siguiente nivel.</p>
                        <h1 className="text-display font-bold mb-4 ">
                            La Taberna del Rol
                        </h1>
                        <Link to="/productos">
                            <button className="active:scale-95 font-semibold mt-8 py-2 px-6 bg-dragon border-b-2 border-rune text-pergamino hover:px-10 hover:rounded-2xl hover:text-2xl transition:ease-out duration-500 cursor-pointer">
                                Explorar Artículos
                            </button>
                        </Link>
                    </div>
                </section>

                {cargando ? (
                    <div className="flex justify-center items-center h-dvh">
                        <img src={loading} alt="Cargando..." className="h-auto w-32" />
                    </div>
                ) : (
                    <ProductList />
                )}
            </main>
            <Footer />
        </>
    );
};

export default Home;
