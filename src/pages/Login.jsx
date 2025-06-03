import React, { useContext, useState } from 'react'
import { CartContext } from '../context/cartContext'
import { useNavigate } from 'react-router-dom'
/* import { Link } from 'react-router-dom' */


const Login = () => {
    //funcion que se trae
    const { setIsAuth } = useContext(CartContext)
    //y los estados que se van a usar
    const [email, setEmail] = useState('')
    const [password, SetPassword] = useState('')
    const [error, setError] = useState({})
    const navigate = useNavigate()

    //form que va a analizar todo lo que se va a mandar en el form
    const handleSubmit = async (e) => {
        e.preventDefault()
        let validationErrors = {}
        //si no estan, se presentan estos errores
        if (!email) validationErrors.email = 'Email es requerido'
        if (!password) validationErrors.password = 'la contraseña es requerida'

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors)
        }
        return
    }

    try {

        //aca se busca en la base de datos de los usuarios
        const res = await fetch('data/users.json')
        const users = await res.json()
        //revisa si el usuario y la contraseña que se inserto es la misma que esta gaurdada en la base de datos
        const foundUser = users.find((user) => user.email === email && user.passsword === password)
        //si no esta bien, lanza error
        if (!foundUser) {
            setError({ email: 'credenciales invalidas' })
        } else {
            if{
                //caso contrario, revisas el rol, y cacmbia eel estado de autenticacion a true y permite avanar.
                useFetcher(foundUser.rol === 'admin'){
                setIsAuth(true)
                navigate('/admin')
            } else {
                navigate('/')
            }
        }

    } catch (err) {
        setError({ email: 'Algo salio mal, por favor intentelo mas tarde' })
    }


    return (
        <div className="admin h-dvh ">
            <div className="admin-login rounded-2xl">
                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        maxWidth: '400px',
                        margin: 'auto',
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="formBasicEmail" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                            Email address
                        </label>
                        <input
                            id="formBasicEmail"
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                padding: '0.5rem',
                                border: `1px solid ${errors.email ? 'red' : '#ced4da'}`,
                                borderRadius: '0.25rem',
                            }}
                        />
                        {errors.email && (
                            <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                                {errors.email}
                            </div>
                        )}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="formBasicPassword" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                            Password
                        </label>
                        <input
                            id="formBasicPassword"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                padding: '0.5rem',
                                border: `1px solid ${errors.password ? 'red' : '#ced4da'}`,
                                borderRadius: '0.25rem',
                            }}
                        />
                        {errors.password && (
                            <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                                {errors.password}
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        style={{
                            backgroundColor: '#007bff',
                            color: 'white',
                            padding: '0.75rem',
                            border: 'none',
                            borderRadius: '0.25rem',
                            cursor: 'pointer',
                            fontSize: '1rem',
                        }}
                    >
                        Submit
                    </button>
                </form>

                {/*     <h1>Login</h1>
                <button className="error-back"><Link to='/'>Volver al inicio</Link></button> */}
            </div>
        </div>
    )
}

export default Login
