import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/images/loading.gif'

const Home = ({ cart, productos, cargando, agregarCarrito, borrarProducto }) => {
    return (
        <>
            <Header borrarProducto={borrarProducto} cartItems={cart} />
            <main>
                <h1>Bienvenidos a mi Tienda</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptate illum molestias, voluptates dolorem rerum. Alias tempore ut nisi eum, harum natus velit veritatis ea iste illum facere, ipsam modi!</p>
                {
                    cargando ? <img src={loading} alt='loading' /> :

                        <ProductList agregarCarrito={agregarCarrito} productos={productos} />
                }


            </main>



            <Footer />
        </>
    )
}

export default Home
