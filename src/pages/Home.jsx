import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/images/loading.gif'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


const Home = () => {
    const { cargando } = useContext(CartContext)
    return (
        <>
            <Header />
            <main>
                <section className="banner relative h-[90dvh] bg-fixed bg-center bg-cover flex items-center justify-center">

                    <div className="absolute inset-0 bg-black/40 " />
                    <div className="relative z-20 flex flex-col items-center justify-center gap-8 h-full text-center text-parchment px-4">

                        <p className="text-main">Guías, Mapas, builds y artefactos para llevar tu partida al siguiente nivel.</p>
                        <h1 className="text-display font-bold mb-4 ">
                            La tabero del Rol
                        </h1>

                        <Link to="/productos"><button className="bg-dragon/80 font-semibold mt-8 py-2 px-6 rounded-4xl hover:bg-druid hover:text-rune  transition ease-in-out duration-300 cursor-pointer"
                        >
                            Explorar Articulos
                        </button>
                        </Link>
                    </div>
                </section>
                {
                    cargando ?
                        <div className="flex justify-center items-center h-dvh">
                            <img src={loading} alt="loading" className="h-auto w-32" />
                        </div>
                        :

                        <ProductList />
                }
            </main>
            <Footer />
        </>
    )
}

export default Home
