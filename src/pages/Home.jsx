import React from 'react';
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';
import ProductsList from '../components/ProductsList';
import Loading from '../assets/images/loading.gif'


const Home = ({ cart, productos, cargando, agregarCarrito, borrarProducto }) => {

    return (
        <>

            <Header borrarProducto={borrarProducto} cart={cart} />
            <main>
                <h1>
                    Bienvenidos a mi tienda
                </h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque natus nulla itaque commodi adipisci corporis ipsa voluptatem, labore unde, quos quo aliquid cum perspiciatis deserunt nostrum nobis, odit veritatis nemo.
                </p>

                {
                    cargando ? <img src={Loading} /> :
                        <ProductsList agregarCarrito={agregarCarrito} productos={productos} />
                }
            </main>
            <Footer />
        </>
    );
};

export default Home;