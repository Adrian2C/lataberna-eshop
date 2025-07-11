import React, { useState, useEffect } from 'react';

function FormularioEdicion({ productoSeleccionado, onActualizar, onClose }) {
    const [producto, setProducto] = useState(productoSeleccionado);

    useEffect(() => {
        setProducto(productoSeleccionado);
    }, [productoSeleccionado]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleCerrar = () => {
        if (window.confirm('¿Seguro que querés cerrar el formulario sin guardar?')) {
            onClose();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const precioValido = /^\d+(\.\d{1,2})?$/.test(producto.precio);
        if (!precioValido) {
            alert("El precio debe tener como máximo dos decimales.");
            return;
        }

        onActualizar(producto);
    };
    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="bg-pergamino rounded-lg shadow-2xl w-full max-w-xl mx-4 p-6 relative border border-bg">

                <button
                    onClick={handleCerrar}
                    className="absolute top-3 right-3 text-red-700 hover:text-red-900 font-bold text-xl"
                    aria-label="Cerrar formulario"
                >
                    ×
                </button>

                <h2 className="text-2xl font-extrabold mb-4 text-dragon text-center">Editar Producto</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-semibold text-sm mb-1 text-bg">ID:</label>
                        <input
                            type="number"
                            name="precio"
                            value={producto.precio || ''}
                            onChange={handleChange}
                            required
                            min="0"
                            className="w-full bg-white text-arcane/80 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rune"
                        />

                    </div>
                    <div>
                        <label className="block font-semibold text-sm mb-1 text-bg">Nombre:</label>
                        <input
                            type="text"
                            name="nombre"
                            value={producto.nombre || ''}
                            onChange={handleChange}
                            required
                            className="w-full bg-white text-arcane/80 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rune"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold text-sm mb-1 text-bg">Precio:</label>
                        <input
                            type="number"
                            name="precio"
                            value={producto.precio || ''}
                            onChange={handleChange}
                            required
                            min="0"
                            className="w-full bg-white text-arcane/80 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rune"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold text-sm mb-1 text-bg">Stock:</label>
                        <input
                            type="number"
                            name="stock"
                            value={producto.stock || ''}
                            onChange={handleChange}
                            required
                            className="w-full text-arcane/80 bg-white px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rune"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold text-sm mb-1 text-bg">Imagen URL:</label>
                        <input
                            type="text"
                            name="imagen"
                            value={producto.imagen || ''}
                            onChange={handleChange}
                            required
                            className="w-full text-arcane/80 bg-white px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rune"
                        />
                    </div>
                    <div className="pt-4 flex justify-end">
                        <button
                            type="submit"
                            className="bg-rune text-bg hover:text-pergamino hover:bg-dragon  font-semibold px-6 py-2 rounded transition-all duration-200"
                        >
                            Actualizar Producto
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormularioEdicion;
