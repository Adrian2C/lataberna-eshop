import React from 'react';

const Product = ({ product, addToCart }) => {
    return (
        <div>

            <span>{product.name} - ${product.price}</span>

            <button onClick={() => addToCart(product)}> Agregar</button>
        </div>
    )
}

export default Product