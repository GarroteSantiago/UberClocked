import React, {useEffect, useRef, useState} from 'react';
import styles from "./DropDownMenuButton.module.css"

function DropDownMenuButton({children, menuTitle}) {
    const [isVisible, setIsVisible] = useState(false);
    const menuRef = useRef(null); // Usamos un ref para el contenedor del menú
    const buttonRef = useRef(null); // Usamos un ref para el botón

    // Función que alterna la visibilidad
    const toggleContent = () => {
        setIsVisible(!isVisible);
    };

    // Función para cerrar el menú si el clic está fuera del botón o el menú
    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target) &&
            buttonRef.current && !buttonRef.current.contains(e.target)) {
            setIsVisible(false);
        }
    };

    // Agregar el evento de clic fuera cuando el componente se monta
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.dropDownButtonContainer}>

            <button ref={buttonRef} onClick={toggleContent} className={styles.dropDownButton}>
                {menuTitle}
            </button>

            <img src="/MenuArrow.svg" alt="MenuArrow" />

            <div
                ref={menuRef}
                className={`${styles.menuWrapper} ${isVisible ? styles.show : styles.hide}`}
            >
                {children}
            </div>

        </div>
    );

}

export default DropDownMenuButton;