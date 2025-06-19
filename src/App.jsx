import { useContext } from 'react'
import './assets/style/style.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import Contacto from './pages/Contactos'
import Galeria from './pages/GaleriaDeProductos'
import NotFound from './pages/NotFound'

import Admin from './pages/Admin'
import DetalleProductos from './components/DetalleProductos'
import Login from './pages/Login'
import RutaProtegida from './Auth/RutasProtegidas'
import { CartContext } from './context/cartContext'

function App() {
  const { isAuthenticated } = useContext(CartContext)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/acercade' element={<AcercaDe />} />
      <Route path='/productos' element={<Galeria />} />
      <Route path='/productos/:id' element={<DetalleProductos />} />

      <Route path='/contacto' element={<Contacto />} />
      <Route path='/admin' element={<RutaProtegida isAuthenticated={isAuthenticated}> <Admin /></RutaProtegida>} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
