import { useState } from 'react'
import './assets/style/style.css'
import Home from './layout/Home'

function App() {
  const [cart, setCart] = useState([])
  const clearCart = () => {
    setCart([]);
  };
  const handleAddToCart = (product) => {
    setCart([...cart, product])
  }
  return (
    <>

      <Home cart={cart} handleAddToCart={handleAddToCart} clearCart={clearCart} />
    </>
  )
}

export default App
