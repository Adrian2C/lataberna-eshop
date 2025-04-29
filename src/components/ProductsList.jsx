import React from 'react';
import Product from './Product'

const ProductList = ({ products, addToCart }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <Product product={product} addToCart={addToCart} />
            ))}
        </div>
    )
}

export default ProductList;