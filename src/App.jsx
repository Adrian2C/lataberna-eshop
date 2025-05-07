import { useState } from 'react'
import './assets/style/style.css'
import Home from './layout/Home'
/* import Error from './assets/images/not-found.jpg' */

function App() {
  const [cart, setCart] = useState([])

  const borrarProducto = (product) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === product.id
            ? item.cantidad > 1
              ? { ...item, cantidad: item.cantidad - 1 }
              : null
            : item
        )
        .filter(item => item !== null)
    );
  };

  const handleAddToCart = (product) => {
    const productExist = cart.find(item => item.id === product.id);
    if (productExist) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      ));
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Home
      cart={cart}
      handleAddToCart={handleAddToCart}
      clearCart={clearCart}
      borrarProducto={borrarProducto}
    />
  );
}

export default App
