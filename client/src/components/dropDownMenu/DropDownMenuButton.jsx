import React, { useState } from 'react';
import styles from "./DropDownMenuButton.module.css"

function DropDownMenuButton({children, menuTitle}) {
    const [isVisible, setIsVisible] = useState(false);

    const toggleContent = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={styles.dropDownButtonContainer}>
            <button onClick={toggleContent} className={styles.dropDownButton}>
                {menuTitle}
            </button>
            <img src="/MenuArrow.svg" alt="MenuArrow" />
            { isVisible &&
                children
            }
        </div>
    );

}

export default DropDownMenuButton;