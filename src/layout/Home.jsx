import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Main from '../components/Main';

import { productsList } from '../utils/data';
import ProductsList from '../components/ProductsList';

import Cart from '../components/Cart';

import Loading from '../assets/images/loading.gif'
import NotFound from '../components/NotFound';

const Home = ({ cart, handleAddToCart, clearCart, borrarProducto }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const toggleCart = () => setIsCartOpen(!isCartOpen);


    const [productos, setProductos] = useState([])
    const [carga, setCarga] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch('https://6812b137129f6313e20f46de.mockapi.io/productos-ecommerce/productos')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setProductos(datos)
                setCarga(false)
            })
            .catch((error) => {
                console.error('Error:', error)
                setCarga(false)
                setError(true)
            });
    }, [])

    if (error) {
        return <NotFound />
    }

    return (
        <>
            <Nav
                countItem={cart.length}
                toggleCart={toggleCart}
                cartItems={cart}
                borrarProducto={borrarProducto}
                clearCart={clearCart}
            />
            <Header />
            <Main />
            {
                carga ? <img src={Loading} alt='loading' /> :

                
                <ProductsList products={productos} addToCart={handleAddToCart} />

            }
            <Cart
                cartItems={cart}
                isCartOpen={isCartOpen}
                toggleCart={toggleCart}
                clearCart={clearCart}
                borrarProducto={borrarProducto}
            />
            <Footer />
        </>
    );
};

export default Home;