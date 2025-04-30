import React from 'react';

const Product = ({ product, addToCart }) => {
    return (
        <div className="product-card" key={product.id}>
            <img className="product-img" alt={product.namee} src={product.img} />
            <div className="product-content">
                <h3>{product.name}</h3>
                <h4>${product.price}</h4>
                <p>{product.description}</p>
                <button onClick={() => addToCart(product)}> Agregar</button>
            </div>
        </div>
    )
}

export default Product
/* 

const Product = ({ product, addToCart }) => {
    return (
        <div>

            <span>{product.name} - ${product.price}</span>

            <button onClick={() => addToCart(product)}> Agregar</button>
        </div>
    )
}

 */