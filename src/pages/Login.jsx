import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <div className="admin h-dvh ">
            <div className="admin-login rounded-2xl">
                <h1>Login</h1>
                <button className="error-back"><Link to='/'>Volver al inicio</Link></button>
            </div>
        </div>
    )
}

export default Login
