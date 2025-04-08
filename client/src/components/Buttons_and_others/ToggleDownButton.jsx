import React, { useState } from 'react';
import {Link} from "react-router-dom";

const ToggleDownButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleContent = () => {
        setIsVisible(!isVisible); // Cambia el estado entre abierto/cerrado
    };
    return (
        <div>
            <button onClick={toggleContent} className="toggle-button">
                {"Home"}
            </button>
            { isVisible &&
                <div className="toggle-store">
                    <p> Botones de la store</p>
                    {/* <Link to="/pc-hardware" className="dropdown-item">PC Hardware</Link>
                    <Link to="/server-hardware" className="dropdown-item">Server Hardware</Link>
                    <Link to="/built-pcs" className="dropdown-item">Built PC’s</Link>*/}
                </div>
            }
        </div>
    );
};

export default ToggleDownButton;