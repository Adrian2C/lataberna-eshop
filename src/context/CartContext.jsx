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

    const [isAuthenticated, setIsAuth] = useState(true)
    const [busqueda, setBusqueda] = useState("")

    const [equipo, setEquipo] = useState([]);
    const [loadingEquipo, setLoadingEquipo] = useState(true);
    const [errorEquipo, setErrorEquipo] = useState(null);

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
    useEffect(() => {
        fetch('https://6812b137129f6313e20f46de.mockapi.io/productos-ecommerce/productos')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setEquipo(datos)
                setLoadingEquipo(false)
            })
            .catch((error) => {
                console.error('Hubo un error al cargar el equipo', error)
                setErrorEquipo('hubo un Problema al cargar al team.')
                setLoadingEquipo(false);
            })
    },
        [])

    const productosFiltrados = productos.filter((producto) => producto?.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase()))

    const handleAddToCart = (product) => {
        if (!product.cantidad || product.cantidad <= 0) {
            alert('Debes seleccionar una cantidad válida');
            return;
        }

        const productInCart = cart.find((item) => item.id === product.id);

        if (productInCart) {
            setCart(cart.map((item) =>
                item.id === product.id
                    ? { ...item, cantidad: item.cantidad + product.cantidad }
                    : item
            ));
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
                        return null;
                    }
                } else {
                    return item;
                }
            }).filter(item => item !== null);
        });
    };

    const clearCart = () => {
        setCart([])
        localStorage.removeItem("cart")
    }
    return (
        <CartContext.Provider
            value={{
                cart, productos, cargando, error, handleAddToCart, handleDeleteFromCart, isAuthenticated, setIsAuth, productosFiltrados, busqueda, setBusqueda, equipo, loadingEquipo, errorEquipo, clearCart
            }}>
            {children}
        </CartContext.Provider>
    )

}