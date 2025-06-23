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

    //Equipo
    const [equipo, setEquipo] = useState([]);
    const [loadingEquipo, setLoadingEquipo] = useState(true);
    const [errorEquipo, setErrorEquipo] = useState(null);

    //productos
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
    // Guardar carrito en localStorage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])
    // Cargar equipo para AcercaDe
    useEffect(() => {
        fetch('https://6812b137129f6313e20f46de.mockapi.io/productos-ecommerce/productos')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setEquipo(datos)
                setLoading(false)
            })
            .catch((error) => {
                setError('hubo un Problema al cargar al team.')
                setLoading(false);
            })
    },
        [])

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
            value={{
                cart, productos, cargando, error, handleAddToCart, handleDeleteFromCart, isAuthenticated, setIsAuth, productosFiltrados, busqueda, setBusqueda, equipo, loadingEquipo, errorEquipo,
            }}>
            {children}
        </CartContext.Provider>
    )

}