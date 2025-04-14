import React, { useState } from 'react';
import styles from "./ToggleDownButton.module.css"

const ToggleDownButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleContent = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div className={styles.dropdown}>
            <button onClick={toggleContent} className={styles.toggleButton}>
                {"Store"}
            </button>
            { isVisible &&
                <div className={styles.content}>
                    {/* <Link to="/pc-hardware" className="dropdown-item">PC Hardware</Link>
                    <Link to="/server-hardware" className="dropdown-item">Server Hardware</Link>
                    <Link to="/built-pcs" className="dropdown-item">Built PC’s</Link>*/}
                    <a href="#"> PC Hardware </a>
                    <a href="#"> Server Hardware </a>
                    <a href="#"> Built PC </a>
                </div>
            }
        </div>
    );
};

export default ToggleDownButton;