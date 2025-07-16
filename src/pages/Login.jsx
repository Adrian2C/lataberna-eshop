import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
    const { email, setEmail, password, setPassword, handleSubmit, errors } = useAuth();
    
    useEffect(() => {
        document.getElementById('formBasicEmail')?.focus();
    }, []);

    return (
        <main className="admin h-dvh flex items-center justify-center bg-gray-100">
            <section
                className="bg-druid border-4 border-green-950 p-8 rounded-2xl shadow-lg "
                aria-label="Formulario de inicio de sesión"
            >
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                    <div className="flex flex-col">
                        <label htmlFor="formBasicEmail" className="mb-1 font-semibold">
                            Email
                        </label>
                        <input
                            id="formBasicEmail"
                            type="email"
                            placeholder="ejemplo@correo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            required
                            aria-invalid={!!errors.email}
                            className={`p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm mt-1" role="alert">{errors.email}</span>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="formBasicPassword" className="mb-1 font-semibold">
                            Contraseña
                        </label>
                        <input
                            id="formBasicPassword"
                            type="password"
                            placeholder="Tu contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                            required
                            aria-invalid={!!errors.password}
                            className={`p-2 border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.password && (
                            <span className="text-red-500 text-sm mt-1" role="alert">{errors.password}</span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="bg-rune text-bg hover:text-pergamino hover:bg-dragon  font-semibold py-2 rounded transition duration-200"
                    >
                        Iniciar sesión
                    </button>

                    <div className="w-full text-center">
                        <Link
                            to="/"
                            className="inline-block mt-2 px-10 py-3 text-sm font-bold rounded-xl bg-rune text-bg hover:text-pergamino hover:bg-dragon  transition delay-100"
                            aria-label="Volver al inicio"
                        >
                            ← Volver atrás
                        </Link>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default Login;
