import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/images/loading.gif'
import intro from '../assets/images/intro.png'

const Home = ({ cart, productos, cargando, agregarCarrito, borrarProducto }) => {
    return (
        <>
            <Header borrarProducto={borrarProducto} cartItems={cart} />
            <main>
                <section className="bg-gray-100 min-h-screen grid grid-cols-1 sm:grid-cols-2 align-middle ">
                    <div className="bg-pink-100">
                        <h1 className="text-primary text-2xl font-bold">Bienvenidos a mi Tienda</h1>
                    </div>
                    <div className="bg-primary">
                        <img src={intro} alt='intro' className="h-xl" />
                    </div>
                </section>
                {
                    cargando ? <div className='flex justify-center align-middle h-dvh'><img src={loading} alt='loading' className="h-auto w-auto" /></div> :

                        <ProductList agregarCarrito={agregarCarrito} productos={productos} />
                }


            </main>



            <Footer />
        </>
    )
}

export default Home
