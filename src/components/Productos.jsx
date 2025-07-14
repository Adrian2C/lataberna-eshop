import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
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

const Productos = ({ producto }) => {
    const { handleAddToCart } = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)

    const slug = slugify(producto.nombre)

    return (
        <article className="...">
            {/* ... resto igual ... */}
            <Link
                to={`/productos/${slug}`}
                className="text-md font-semibold text-black hover:text-rune transition"
            >
                Ver más
            </Link>
            {/* ... */}
        </article>
    )
}
export default Productos
