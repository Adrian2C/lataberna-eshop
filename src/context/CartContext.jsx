import React, { createContext, useState, useEffect } from 'react'
/* import Productos from '../components/Productos'; */


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(false)
    /* con esta funcion se comprueba si el usuario esta o no auth */
    const [isAuthenticated, setIsAuth] = useState(true)

    useEffect(() => {
        fetch('/data/data.json')
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

    const handleAddToCart = (product, cantidad) => {

        const productInCart = cart.find((item) => item.id === product.id);
        if (productInCart) {

            setCart(cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + cantidad } : item));
        } else {
            setCart([...cart, { ...product, quantity: cantidad }]);
        }
    };

    const handleDeleteFromCart = (product) => {
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === product.id) {
                    if (item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 };
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
        <CartContext.Provider
            value={{ cart, productos, cargando, error, handleAddToCart, handleDeleteFromCart, isAuthenticated, setIsAuth }}>
            {children}
        </CartContext.Provider>
    )

}