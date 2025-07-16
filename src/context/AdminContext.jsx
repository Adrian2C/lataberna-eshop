import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
export const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    const [open, setOpen] = useState(false)
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
            Swal.fire({
                title: "Error",
                text: "Hubo un problema al eliminar el producto.",
                icon: "error"
            });
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
                title: "Producto agregado correctamente!",
                icon: "success",
                timer: 1500,
                allowEscapeKey: true,
                allowOutsideClick: true,
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
            Swal.fire({
                icon: 'success',
                title: 'Producto Actualizado!',
                confirmButtonColor: '#435a12',
                allowEscapeKey: true,
                allowOutsideClick: true
            });
            setOpenEditor(false)
            setSeleccionado(null)
            cargarProductos()
        } catch (error) {
            console.log(error.message)
        }
    }
    const eliminarProducto = async (id) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#2c5e4a',
            cancelButtonColor: "#8b0000",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const respuesta = await fetch(`${apiUrl}/${id}`, {
                        method: 'DELETE',
                    });

                    if (!respuesta.ok) throw new Error('Error al eliminar');

                    Swal.fire({
                        title: "¡Eliminado!",
                        text: "El producto fue eliminado correctamente.",
                        icon: "success",
                        confirmButtonColor: '#2c5e4a',
                        confirmButtonText: "Sí, cerrar",
                        cancelButtonText: "Cancelar",
                    });

                    cargarProductos();
                } catch (error) {
                    Swal.fire({
                        title: "Error",
                        text: "Hubo un problema al eliminar el producto.",
                        icon: "error",
                        allowEscapeKey: true,
                        allowOutsideClick: true,
                        timerProgressBar: true,
                    });
                }
            }
        });
    };

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