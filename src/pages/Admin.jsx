import React, { useState, useEffect } from "react";
import FormularioProducto from "../components/FormularioProducto";

const Admin = () => {
    const [productos, setProductos] = useState([]);
    const [form, setForm] = useState({
        nombre: '',
        precio: '',
        stock: '',
        imagen: '',
        categorir: '',
        descripcion: '',
    });
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false)//se encarga cuando se muestre el formulario y cuando no
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
        <div className="container">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <nav>
                        <ul className="nav">
                            <li className="navItem">
                                <button className="navButton">
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </button>
                            </li>
                            <li className="navItem">
                                <a href="/admin">Admin</a>
                            </li>
                        </ul>
                    </nav>
                    <h1 className="title">Panel Administrativo</h1>

                    <ul className="list">
                        {productos.map((product) => (
                            <li key={product.id} className="listItem">
                                <img
                                    src={product.imagen}
                                    alt={product.nombre}
                                    className="listItemImage"
                                />
                                <span>{product.nombre}</span>
                                <span>${product.precio}</span>
                                <div>
                                    <button className="editButton">Editar</button>

                                    <button className="deleteButton" onClick={() => eliminarProducto(product.id)}>Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
            {/* mediante el boton, se llama la funcion para abrir el formulario y agregar el producto */}
            <button onClick={() => setOpen(true)}>Agregar producto nuevo</button>
            {open && (<FormularioProducto onAgregar={agregarProducto} />)}
        </div>
    );
};

export default Admin;
