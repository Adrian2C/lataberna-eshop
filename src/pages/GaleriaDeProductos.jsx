import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/images/loading.gif'

const GaleriaDeProductos = ({ cart, productos, cargando, agregarCarrito, borrarProducto }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />

      <div className="min-h-screen bg-[#567219b4] py-10 px-4">
        <h2 className="text-[#D4AF37] text-3xl font-bold text-center mb-6">
          Nuestros productos:
        </h2>

        {
          cargando ? (
            <div className="flex justify-center items-center h-dvh">
              <img src={loading} alt="loading" className="h-auto w-32" />
            </div>
          ) : (
            <ProductList agregarCarrito={agregarCarrito} productos={productos} />
          )
        }
      </div>

      <Footer />
    </>
  )
}

export default GaleriaDeProductos
