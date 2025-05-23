import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
    return (
        <div>
            <h1>Pagina del Admin</h1>
            <h2>usuario autentiifcado</h2>
            <button className="error-back"><Link to='/'>Volver al inicio</Link></button>
        </div>
    )
}

export default Admin
