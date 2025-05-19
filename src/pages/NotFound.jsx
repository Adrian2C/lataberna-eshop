import React from 'react'
import { Link } from 'react-router-dom'
import error from '../assets/images/error.gif'

const NotFound = () => {
    return (
        <div className="error ">

            <img src={error} alt="error al cargar el archivo" className="a" />

            <div className="absolute bottom-2 right-8  ">
                <button className="error-back"><Link to='/'>Volver al inicio</Link></button>
            </div>
        </div>
    )
}

export default NotFound
