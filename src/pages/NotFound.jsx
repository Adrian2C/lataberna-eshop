import React from "react";
import error from '../assets/images/error.gif'
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notfound-container">
            <div className="notfound-content">
                <img src={error} />
                <button><Link to='/'>Volver al inicio</Link></button>
            </div>
        </div>
    )
}

export default NotFound
