import React from "react";
import '../assets/style/notfound.css'
import error from '../assets/images/error.gif'

const NotFound = () => {
    return (
        <div className="notfound-container">
            <div className="notfound-content">
                <img src={error} />
                <button className="notfound-back">
                    <a>Volver</a>
                </button>
            </div>
        </div>
    )
}

export default NotFound
