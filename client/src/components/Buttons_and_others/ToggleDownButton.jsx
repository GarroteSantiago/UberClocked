import React, { useState } from 'react';

const ToggleDownButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen); // Cambia el estado entre abierto/cerrado
    };
    return (
        <div className="toggle-container">
            <button onClick={toggleContent} className="toggle-button">
                {isOpen ? 'Ocultar Contenido' : 'Mostrar Contenido'}
            </button>

            <div className={`toggle-content ${isOpen ? 'open' : ''}`}>
                <p>
                    Este es el contenido desplegable. Puedes personalizarlo con texto,
                    imágenes u otros elementos según lo necesites.
                </p>
            </div>
        </div>
    );
};

export default ToggleDownButton;