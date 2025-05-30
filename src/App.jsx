import { useContext } from 'react'
import './assets/style/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import Contacto from './pages/Contactos'
import Galeria from './pages/GaleriaDeProductos'
import NotFound from './pages/NotFound'
import DetalleProductos from './components/DetalleProductos'
import Cart from './components/Cart'
import Admin from './pages/Admin'
import Login from './pages/Login'
import RutaProtegida from './Auth/RutasProtegidas'
import { CartContext } from './context/cartContext'

function App() {

  const { cart, productos, cargando, error, handleAddToCart, handleDeleteFromCart, isAuthenticated } = useContext(CartContext)
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/acercade' element={<AcercaDe />} />
        <Route path='/productos' element={<Galeria />} />
        <Route path='/productos/:id' element={<DetalleProductos productos={productos} />} />
        <Route path='/contacto' element={<Contacto borrarProducto={handleDeleteFromCart} cart={cart} />} />
        <Route path='/admin' element={<RutaProtegida isAuthenticated={isAuthenticated}> <Admin /></RutaProtegida>} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}


export default App
