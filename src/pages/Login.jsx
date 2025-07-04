import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
const Login = () => {

    const { email, setEmail, password, setPassword, handleSubmit, errors } = useAuth()

    return (
        <div className="admin h-dvh flex items-center justify-center bg-gray-100">
            <div className="bg-druid p-8 rounded-2xl shadow-lg w-full max-w-md">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="formBasicEmail" className="mb-1 font-semibold">
                            Email address
                        </label>
                        <input
                            id="formBasicEmail"
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm mt-1">{errors.email}</span>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="formBasicPassword" className="mb-1 font-semibold">
                            Password
                        </label>
                        <input
                            id="formBasicPassword"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`p-2 border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.password && (
                            <span className="text-red-500 text-sm mt-1">{errors.password}</span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
                    >
                        Iniciar sesión
                    </button>
                    <div className="w-full">
                        <Link
                            to="/"
                            className="px-10 py-3 text-sm font-bold bg-rune text-bg rounded-xl hover:bg-arcane hover:text-pergamino transition delay-100"
                        >
                            ← Volver atrás
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
    /* return (
        <div className="admin h-dvh">
            <div className="admin-login rounded-2xl">
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: 'auto' }}>
                    <div>
                        <label htmlFor="formBasicEmail">Email address</label>
                        <input
                            id="formBasicEmail"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                padding: '0.5rem',
                                border: `1px solid ${errors.email ? 'red' : '#ced4da'}`,
                                borderRadius: '0.25rem',
                            }}
                        />
                        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                    </div>

                    <div>
                        <label htmlFor="formBasicPassword">Password</label>
                        <input
                            id="formBasicPassword"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                padding: '0.5rem',
                                border: `1px solid ${errors.password ? 'red' : '#ced4da'}`,
                                borderRadius: '0.25rem',
                            }}
                        />
                        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                    </div>

                    <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', padding: '0.75rem', borderRadius: '0.25rem' }}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    ) */
}

export default Login
