import React, { useContext, useState } from "react";
import FormularioEdicion from '../components/admin/FormularioEdicion';
import FormularioProducto from '../components/admin/FormularioProducto';
import AdminNavbar from '../components/admin/AdminNavbar';
import { CartContext } from "../context/CartContext";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import '../assets/style/adminStyle.css'

const Admin = () => {
    const { setIsAuth } = useContext(CartContext);
    const {
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
    } = useContext(AdminContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        setIsAuth(false);
        navigate('/');
        localStorage.removeItem('isAuth');
    };


    const [paginaActual, setPaginaActual] = useState(1);
    const productosPorPagina = 6;

    const totalPaginas = Math.ceil(productos.length / productosPorPagina);
    const indiceInicio = (paginaActual - 1) * productosPorPagina;
    const indiceFin = indiceInicio + productosPorPagina;
    const productosPagina = productos.slice(indiceInicio, indiceFin);

    const cambiarPagina = (nuevaPagina) => {
        if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
            setPaginaActual(nuevaPagina);
        }
    };

    return (
        <div className="w-full">
            <main role="main ">
                {loading ? (
                    <p className="text-center py-10 text-lg">Cargando productos...</p>
                ) : (
                    <>
                        <h1 className="bg-dragon w-full py-6 text-2xl sm:text-3xl md:text-5xl font-bold text-center">
                            Panel Administrativo
                        </h1>

                        <div className="flex flex-col-reverse items-center py-2 sm:flex-row sm:justify-around sm:items-center bg-rune/20">
                            <div className="text-center my-2">
                                <button
                                    className="flex items-center px-4 h-10 rounded-lg  bg-rune text-bg hover:text-rune hover:bg-dragon group"
                                    onClick={() => setOpen(true)}
                                    aria-label="Agregar nuevo producto"
                                >
                                    Agregar Producto Nuevo
                                </button>
                            </div>
                            <AdminNavbar onLogout={handleLogout} />

                        </div>


                        {open && (
                            <FormularioProducto
                                onAgregar={agregarProducto}
                                onClose={() => setOpen(false)}
                            />
                        )}

                        {openEditor && (
                            <FormularioEdicion
                                productoSeleccionado={seleccionado}
                                onActualizar={actualizarProducto}
                                onClose={() => setOpenEditor(false)}
                            />
                        )}

                        <section aria-label="Lista de productos" className="px-2">
                            <ul className="w-full text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 p-4">
                                {productosPagina.length === 0 ? (
                                    <p className="col-span-full text-gray-500 text-lg">No hay productos disponibles.</p>
                                ) : (
                                    productosPagina.map((product) => (
                                        <li
                                            key={product.id}
                                            className={`flex flex-col justify-between rounded shadow p-4 bg-white text-black ${productosPagina.length === productosPorPagina ? 'h-full' : ''
                                                }`}
                                        >
                                            <img
                                                src={product.imagen}
                                                alt={`Imagen de ${product.nombre}`}
                                                className="w-full h-auto object-contain mb-2"
                                                loading="lazy"
                                            />
                                            <h2 className="text-2xl font-semibold text-dragon">{product.nombre}</h2>
                                            <p className="font-extrabold text-xl">${product.precio}</p>
                                            <p className="text-xl">stock: {product.stock}</p>

                                            <div className="mt-4">
                                                <button
                                                    className="w-full border-2 hover:bg-dragon  hover:text-pergamino py-1 rounded-xl font-bold"
                                                    onClick={() => {
                                                        setOpenEditor(true);
                                                        setSeleccionado(product);
                                                    }}
                                                    aria-label={`Editar producto ${product.nombre}`}
                                                >
                                                    Editar
                                                </button>

                                                <button
                                                    className="w-full bg-rune text-bg hover:bg-dragon hover:text-pergamino mt-2 py-1 rounded-xl font-bold"
                                                    onClick={() => eliminarProducto(product.id)}
                                                    aria-label={`Eliminar producto ${product.nombre}`}
                                                >
                                                    Eliminar
                                                </button>
                                            </div>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </section>

                        {totalPaginas > 1 && (
                            <nav className="flex justify-center items-center gap-4 my-6 border" aria-label="Controles de paginación">
                                <button
                                    onClick={() => cambiarPagina(1)}
                                    disabled={paginaActual === 1}
                                    className="sm:px-1 md:px-2 lg:px-3 py-1 hover:text-bg text-pergamino rounded hover:bg-pergamino"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                                    </svg>

                                </button>

                                <button
                                    onClick={() => cambiarPagina(paginaActual - 1)}
                                    disabled={paginaActual === 1}
                                    className="sm:px-1 md:px-2 lg:px-3 py-1 hover:text-bg text-pergamino rounded hover:bg-pergamino"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                    </svg>

                                </button>

                                <span className="text-lg font-semibold">
                                    Página {paginaActual} de {totalPaginas}
                                </span>

                                <button
                                    onClick={() => cambiarPagina(paginaActual + 1)}
                                    disabled={paginaActual === totalPaginas}
                                    className="sm:px-1 md:px-2 lg:px-3 py-1 hover:text-bg text-pergamino rounded hover:bg-pergamino"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </button>

                                <button
                                    onClick={() => cambiarPagina(totalPaginas)}
                                    disabled={paginaActual === totalPaginas}
                                    className="sm:px-1 md:px-2 lg:px-3 py-1 hover:text-bg text-pergamino rounded hover:bg-pergamino"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </button>
                            </nav>
                        )}
                    </>
                )}
            </main>
        </div>
    );
};

export default Admin;
