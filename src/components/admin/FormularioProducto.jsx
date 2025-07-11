import React, { useState, useEffect } from 'react';

function FormularioProducto({ onAgregar, onClose }) {
  const [producto, setProducto] = useState({
    nombre: '',
    precio: '',
    stock: '',
    imagen: '',
    categoria: '',
  });
  const [errores, setErrores] = useState({});

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const validarFormulario = () => {
    const nuevosErrores = {};
    if (!producto.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.';
    }
    if (!producto.precio || producto.precio <= 0) {
      nuevosErrores.precio = 'El precio debe ser mayor a 0.';
    }
    if (!producto.stock || producto.stock < 0) {
      nuevosErrores.stock = 'Stock no puede ser negativo.';
    }
    if (!producto.imagen.trim()) {
      nuevosErrores.imagen = 'La URL de la imagen es obligatoria.';
    }
    if (!producto.categoria.trim() || producto.categoria.length < 3) {
      nuevosErrores.categoria = 'La categoría debe tener al menos 3 caracteres.';
    }
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;
    onAgregar(producto);
    onClose();
  };

  const handleCerrar = () => {
    if (window.confirm('¿Seguro que querés cerrar el formulario sin guardar?')) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative bg-pergamino text-druid rounded-2xl w-full max-w-xl p-8 shadow-xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={handleCerrar}
          className="absolute top-3 right-3 text-red-700 hover:text-red-900 font-bold text-xl"
          aria-label="Cerrar formulario"
        >
          ×
        </button>

        <h2 className="text-2xl font-extrabold mb-4 text-dragon text-center">Agregar Producto</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={producto.nombre}
              onChange={handleChange}
              className="w-full text-arcane/80 bg-white rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rune"
            />
            {errores.nombre && <p className="text-sm text-red-600">{errores.nombre}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Precio</label>
            <input
              type="number"
              name="precio"
              value={producto.precio || ''}
              onChange={handleChange}
              required
              min="0"
              className="w-full bg-white text-arcane/80 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rune"
            />

            {errores.precio && <p className="text-sm text-red-600">{errores.precio}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Stock</label>
            <input
              type="number"
              name="stock"
              value={producto.stock}
              onChange={handleChange}
              className="w-full text-arcane/80 bg-white rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rune"
            />
            {errores.stock && <p className="text-sm text-red-600">{errores.stock}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Imagen URL</label>
            <input
              type="text"
              name="imagen"
              value={producto.imagen}
              onChange={handleChange}
              className="w-full text-arcane/80 bg-white rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rune"
            />
            {errores.imagen && <p className="text-sm text-red-600">{errores.imagen}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Categoría</label>
            <input
              type="text"
              name="categoria"
              value={producto.categoria}
              onChange={handleChange}
              className="w-full text-arcane/80 bg-white rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rune"
            />
            {errores.categoria && <p className="text-sm text-red-600">{errores.categoria}</p>}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-rune text-bg hover:text-yellow-100 hover:bg-dragon font-semibold rounded- transition-colors duration-300"
            >
              Agregar Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioProducto;
