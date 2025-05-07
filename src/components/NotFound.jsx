import React from "react";
import error from '../assets/images/error'


const NotFound = () => {
    return (
        <div className="notfound-container">
            <div className="notfound-content">
                <img src={error} />
            </div>
        </div>
    )
}

export default NotFound
