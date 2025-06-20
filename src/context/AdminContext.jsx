import { createContext, useEffect, useState } from "react";
export const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false)//se encarga cuando se muestre el formulario y cuando no
    const [seleccionado, setSeleccionado] = useState(null)
    const [openEditor, setOpenEditor] = useState(false)
    const [error, setError] = useState(false)
    
    const apiUrl = 'https://6840875d5b39a8039a5860f6.mockapi.io/productos'

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProductos(data);
                    setLoading(false);
                }, 2000);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError(true);
                setLoading(false);
            });
    }, []);

    const cargarProductos = async () => {
        try {
            const res = await fetch(apiUrl)
            const data = await res.json()
            setProductos(data)
        } catch (error) {
            console.log('Error al cargar prouctos', error)
        }
    }
    //
    const agregarProducto = async (producto) => {
        try {
            //aca se crea la variable, que es la respuesta, a la llamada a la url, y espera la respuesta.
            const respuesta = await fetch('https://6840875d5b39a8039a5860f6.mockapi.io/productos', {
                //como tengo que enviar(o agregar nuevos prod)
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            })
            if (!respuesta.ok) {
                throw new Error('Error al agregar producto')
            }
            const data = await respuesta.json()
            alert('Producto agregado correctamente')
            cargarProductos()
        } catch (error) {
            console.log(error.message);
        }
    }

    //actualizazr productos
    const actualizarProducto = async (producto) => {
        try {
            const respuesta = await fetch(`${apiUrl}/${producto.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(producto)
                })
            if (!respuesta.ok) throw Error('Error al actualizar el producto');
            const data = await respuesta.json()
            alert('producto actualizado correctamente')
            setOpenEditor(false)
            setSeleccionado(null)
            cargarProductos()
        } catch (error) {
            console.log(error.message)
        }
    }
    //como tiene que eseprar un evento, se conviertre en una funcion asincrona
    const eliminarProducto = async (id) => {
        const confirmar = window.confirm('Estas seguro de elimnar el producto?')
        if (confirmar) {
            try {
                const respuesta = await fetch(`https://6840875d5b39a8039a5860f6.mockapi.io/productos/${id}`, {
                    method: 'DELETE',
                })
                if (!respuesta.ok) throw Error('Error al eliminar')
                alert('producto eliminado correctamente')
                cargarProductos()
            } catch (error) {
                alert('hubo un problema al eliminar el prodcuto)')
            }
        }
    }

    return (
        <AdminContext.Provider value={{
            productos,
            loading,
            open,
            setOpen,
            openEditor,
            setOpenEditor,
            seleccionado,
            setSeleccionado,
            agregarProducto,
            actualizarProducto,
            eliminarProducto
        }}>
            {children}
        </AdminContext.Provider>
    )
}