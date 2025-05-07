import React from "react";
import Error from '../assets/images/not-found.jpg';


const NotFound = () => {
    return (
        <div className="notfound-container">
            <div className="notfound-content">

                <img src={Error} />
            </div>
        </div>
    );
};

export default NotFound;