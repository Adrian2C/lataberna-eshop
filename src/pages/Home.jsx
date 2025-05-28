import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/images/loading.gif'
import bg from '../assets/images/bg.jpg'

const Home = ({ cart, productos, cargando, agregarCarrito, borrarProducto }) => {
    return (
        <>
            <Header borrarProducto={borrarProducto} cartItems={cart} />
            <main>
                <section >
                    <div className=" w-full h-dvh">
                        <img src={bg} alt='bg' className="w-full max-h-dvh object-center " />
                    </div>

                    <h1 className="text-center text-2xl">Bienvenidos a la tienda!</h1>
                </section>
                {
                    cargando ?
                        <div className="flex justify-center items-center h-dvh">
                            <img src={loading} alt="loading" className="h-auto w-32" />
                        </div>
                        :

                        <ProductList agregarCarrito={agregarCarrito} productos={productos} />
                }
            </main>
            <Footer />
        </>
    )
}

export default Home
