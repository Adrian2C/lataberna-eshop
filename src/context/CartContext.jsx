import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : []
    })

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(false)

    /* con esta funcion se comprueba si el usuario esta o no auth */
    const [isAuthenticated, setIsAuth] = useState(true)
    const [busqueda, setBusqueda] = useState("")

    useEffect(() => {
        fetch('https://6840875d5b39a8039a5860f6.mockapi.io/productos')

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
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const productosFiltrados = productos.filter((producto) => producto?.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase()))

    const handleAddToCart = (product) => {

        const productInCart = cart.find((item) => item.id === product.id);
        if (productInCart) {

            setCart(cart.map((item) => item.id === product.id ? { ...item, cantidad: item.cantidad + product.cantidad } : item));
        } else {
            setCart([...cart, { ...product, cantidad: product.cantidad }]);
        }
    };

    const handleDeleteFromCart = (product) => {
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === product.id) {
                    if (item.cantidad > 1) {
                        return { ...item, cantidad: item.cantidad - 1 };
                    } else {
                        return null; // Si cantidad es 1, marcamos para eliminar
                    }
                } else {
                    return item; // Si no es el producto, lo dejamos igual
                }
            }).filter(item => item !== null); // Quitamos los productos nulos
        });
    };

    /* const clearCart = () => {
        setCart([])
        localStorage.remoteItem('cart')
    } */
    return (
        <CartContext.Provider
            value={{ cart, productos, cargando, error, handleAddToCart, handleDeleteFromCart, isAuthenticated, setIsAuth, productosFiltrados, busqueda, setBusqueda }}>
            {children}
        </CartContext.Provider>
    )

}