import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <button className="error-back"><Link to='/'>Volver al inicio</Link></button>
        </div>
    )
}

export default Login
