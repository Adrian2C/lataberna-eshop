import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/style/notfound.css'
import error from '../assets/images/error.gif'

const NotFound = () => {
    return (
        <div className="flex bg-black ">
            <h1>Lo Siento!</h1>
            <img src={error} alt="error al cargar el archivo" />
            <button className="notfound-back"><Link to='/'>Volver al inicio</Link></button>
        </div>
    )
}

export default NotFound
