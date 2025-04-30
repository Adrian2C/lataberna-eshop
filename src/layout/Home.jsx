import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Main from '../components/Main';

import { productsList } from '../utils/data';
import ProductsList from '../components/ProductsList'
import Cart from '../components/Cart'

const Home = ({ cart, handleAddToCart }) => {
    
    const [isCartOpen, setIsCartOpen] = useState(false);
    const toggleCart = () => setIsCartOpen(!isCartOpen);
    /* const [cart, setCart] = useState([]); */
    /* const clearCart = () => {
        setCart([]);
    }; */

    
    return (
        <>
            <Nav countItem={cart.length} toggleCart={toggleCart} />
            <Header />
            <Main />
            <ProductsList products={productsList} addToCart={handleAddToCart} />
            <Cart cartItems={cart} isCartOpen={isCartOpen} toggleCart={toggleCart}  />
            <Footer />
        </>
    )
}

export default Home