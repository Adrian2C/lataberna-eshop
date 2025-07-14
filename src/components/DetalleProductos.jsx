import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


const slugify = (text) =>
    text
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "")

const DetalleProducto = () => {
    const { slug } = useParams()
    const { productos } = useContext(CartContext)

    const producto = productos.find(
        (p) => slugify(p.nombre) === slug
    )

    if (!producto) return <p className="text-red-500">Producto no encontrado</p>

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <Helmet>
                <title>{producto.nombre} | La Taberna</title>
                <meta name="description" content={`Compra ${producto.nombre} a solo $${producto.precio}`} />
                <link rel="canonical" href={`https://tu-dominio.com/productos/${slug}`} />
            </Helmet>

            <h1 className="text-3xl font-bold text-dragon">{producto.nombre}</h1>
            <img src={producto.imagen} alt={producto.nombre} className="rounded-xl mt-4" />
            <p className="text-xl mt-4">Precio: ${producto.precio}</p>
            <p className="text-md text-gray-700">Stock disponible: {producto.stock}</p>
        </div>
    )
}

export default DetalleProducto
