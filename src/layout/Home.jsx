import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Main from '../components/Main';

import { productsList } from '../utils/data';
import ProductsList from '../components/ProductsList'
import Cart from '../components/Cart'

const Home = ({ cart, handleAddToCart }) => {
    const countItem = cart.length
    return (
        <>
            <Nav countItem={countItem} />
            <Header />
            <Main />
            <ProductsList products={productsList} addToCart={handleAddToCart} />
            <Cart cartItems={cart} />
            <Footer />
        </>
    )
}

export default Home