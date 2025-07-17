import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/images/loading.gif'
import { CartContext } from '../context/CartContext'
import { Helmet } from 'react-helmet-async'

const GaleriaDeProductos = () => {
  const { cargando } = useContext(CartContext)

  return (
    <>
      <Helmet>
        <title>Productos | La Taberna del Rol</title>
        <meta
          name="description"
          content="Explora nuestra galería de productos roleros: dados, miniaturas, libros, mapas y más. Todo lo que necesitas para tus aventuras."
        />
        <meta
          name="keywords"
          content="productos rol, dados, miniaturas, libros de rol, galería de productos, tienda de rol"
        />
        <link rel="canonical" href="https://www.tutaberna.com/productos" />
      </Helmet>

      <Header />
      <div className="min-h-screen px-4">
        <h2 className="text-[#D4AF37] text-3xl font-bold text-center mt-20 mb-6 py-5 bg-dragon">
          Nuestros productos
        </h2>
        {
          cargando ? (
            <div className="flex justify-center items-center h-dvh">
              <img src={loading} alt="Cargando productos..." className="h-auto w-32" />
            </div>
          ) : (
            <ProductList />
          )
        }
      </div>
      <Footer />
    </>
  )
}

export default GaleriaDeProductos
