import React, { useState, useEffect, useContext } from "react";
import FormularioEdicion from '../components/admin/FormularioEdicion'
import FormularioProducto from '../components/admin/FormularioProducto'
import { CartContext } from "../context/CartContext";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const { setIsAuth } = useContext(CartContext)
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
    } = useContext(AdminContext)

    const navigate = useNavigate()

    return (
        <div className="container">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <h1 className="bg-red-500 w-dvw text-4xl py-3 text-center">Panel Administrativo</h1>
                    <nav className="bg-blue-400 w-dvw">
                        <ul className="nav">
                            <li className="navItem">
                                <button className="flex click-pointer" onClick={() => {
                                    setIsAuth(false)
                                    navigate('/')
                                    localStorage.removeItem('isAuth')
                                }}>Logout
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                    </svg>
                                </button>
                            </li>
                            <li className="navItem">
                                <a href="/admin">Admin</a>
                            </li>
                        </ul>
                    </nav>

                    <button className="bg-rune text-3xl text-bg hover:bg-dragon hover:text-pergamino px-6 py-3 rounded-xl" onClick={() => setOpen(true)}>Agregar Producto Nuevo</button>


                    {open && (<FormularioProducto onAgregar={agregarProducto} />)}
                    {openEditor && (<FormularioEdicion productoSeleccionado={seleccionado} onActualizar={actualizarProducto} />)
                    }

                    <div className="w-screen flex justify-center">
                        <ul className="jamon2 w-[90%] grid grid-cols-2 lg:grid-cols-5 gap-4 p-4  bg-forge/80">
                            {productos.map((product) => (
                                <li key={product.id} className=" border border-amber-400 rounded shadow p-4 h-full w-full text-black">
                                    <img
                                        src={product.imagen}
                                        alt={product.nombre}
                                        className="listItemImage w-full"
                                    />
                                    <span>{product.nombre}</span>
                                    <span>${product.precio}</span>
                                    <div className="mt-4 flex gap-2 ">
                                        <button className="border-2 hover:bg-dragon hover:border-none hover:text-pergamino px-8 me-3 py-1 rounded-xl " onClick={() => {
                                            setOpenEditor(true)
                                            setSeleccionado(product)
                                        }}>Editar</button>

                                        <button className="bg-rune text-bg hover:bg-dragon hover:text-pergamino px-8 me-3 py-1 rounded-xl" onClick={() => eliminarProducto(product.id)}>Eliminar</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}


        </div>
    );
};

export default Admin;
