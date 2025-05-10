import { useEffect, useState } from 'react'
import './assets/style/style.css'

import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import Contacto from './pages/Contacto'
import Galeria from './pages/Galeria'
import NotFound from './pages/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  const [cart, setCart] = useState([])
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/utils/data.json')
      .then(respuesta => respuesta.json())
      .then(datos => {
        setTimeout(() => {
          setProductos(datos)
          setCargando(false)
        }, 2000)
      })
      .catch(error => {
        console.log('Error', error)
        setCargando(false)
        setError(true)
      })

  }, [])


  const handleAddToCart = (product) => {

    const productExist = cart.find(item => item.id === product.id)

    if (productExist) {
      setCart(cart.map((item) => item.id === product.id ? {
        ...item, cantidad: item.cantidad + 1
      } : item))
    } else {
      setCart([...cart, { ...product, cantidad: 1 }])
    }
  }
  const handleDeleteFromCart = (product) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === product.id) {
          if (item.cantidad > 1) {
            return { ...item, cantidad: item.cantidad - 1 };
          } else {
            return null; // Si quantity es 1, marcamos para eliminar
          }
        } else {
          return item; // Si no es el producto, lo dejamos igual
        }
      }).filter(item => item !== null); // Quitamos los productos nulos
    });
  };



  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home cart={cart} handleAddToCart={handleAddToCart} borrarCarrito={handleDeleteFromCart} />} />


      </Routes>
    </Router>
  )
}


export default App
