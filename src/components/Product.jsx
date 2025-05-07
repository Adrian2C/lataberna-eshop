import React, { useState } from 'react';



const Product = ({ product, addToCart }) => {
    const [cantidad, setCantidad] = useState(1);

    const increase = () => setCantidad(prev => (prev < product.stock ? prev + 1 : prev));
    const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <section className="product">
            <div className="product-card">
                <img className="product-img" alt={product.nombre} src={product.imagen} />
                <div className="product-content">
                    <h3>{product.nombre}</h3>
                    <h4>${product.precio}</h4>
                    {/* <p>Stock: {product.stock}</p> */}
                    <p>{product.descripcion}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                        <button onClick={decrease}>-</button>
                        <span>{cantidad}</span>
                        <button onClick={increase}>+</button>
                    </div>
                    <button onClick={() => addToCart({ ...product, cantidad:cantidad })}>
                        Agregar
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Product;
