import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/images/loading.gif'

const GaleriaDeProductos = ({ cart, productos, cargando, agregarCarrito, borrarProducto }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />
      <h1>Galeria de productos</h1>
      {
        cargando ? <div className='flex justify-center align-middle h-dvh'><img src={loading} alt='loading' className="h-auto w-auto" /></div> :
          <ProductList agregarCarrito={agregarCarrito} productos={productos} />
      }
      <Footer />
    </>
  )
}

export default GaleriaDeProductos
