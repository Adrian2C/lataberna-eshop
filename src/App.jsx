import { useState } from 'react'
import './assets/style/style.css'
import Home from './layout/Home'
import NotFoudn from './components/NotFound'

function App() {
  const [cart, setCart] = useState([])

  const clearCart = () => {
    setCart([]);
  };


  const handleAddToCart = (product) => {

    const productExist = cart.find(item => item.id === product.id)

    if (productExist) {
      setCart(cart.map((item) => item.id === product.id ? {
        ...item, cantidad: item.cantidad + 1
      } : item))
    } else {
      setCart([...cart, product])
    }
  }



  return (
    <>
      <Home cart={cart} handleAddToCart={handleAddToCart} clearCart={clearCart} />
    </>
  )
}


export default App
