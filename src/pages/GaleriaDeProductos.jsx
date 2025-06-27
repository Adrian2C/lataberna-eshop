import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/images/loading.gif'
import { CartContext } from '../context/CartContext'

const GaleriaDeProductos = () => {

  const { cargando } = useContext(CartContext)

  return (
    <>
      <Header />
      <div className="min-h-screen  px-4">
        <h2 className="text-[#D4AF37] text-3xl font-bold text-center mt-20 mb-6 py-5">
          Nuestros productos
        </h2>

        {
          cargando ?
            <div className="flex justify-center items-center h-dvh">
              <img src={loading} alt="loading" className="h-auto w-32" />
            </div>
            :
            <ProductList />

        }
      </div>

      <Footer />
    </>
  )
}

export default GaleriaDeProductos
