import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
export const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false)//se encarga cuando se muestre el formulario y cuando no
    const [seleccionado, setSeleccionado] = useState(null)
    const [openEditor, setOpenEditor] = useState(false)
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

    const agregarProducto = async (producto) => {
        try {
            const respuesta = await fetch('https://6840875d5b39a8039a5860f6.mockapi.io/productos', {
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

            Swal.fire({
                title: ":)!",
                text: "Producto agregado correctamente!",
                icon: "success"
            });
            cargarProductos()
            setOpen(false)
        } catch (error) {
            console.log(error.message);
        }
    }

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
                Swal.fire({
                    title: ":(!",
                    text: "Producto Eliminado correctamente!",
                    icon: "error"
                });
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
            eliminarProducto,
        }}>
            {children}
        </AdminContext.Provider>
    )
}