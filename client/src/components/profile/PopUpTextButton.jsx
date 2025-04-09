import React, {useState} from 'react';
import styles from './PopUpTextButton.module.css';
import PopUp from "./PopUp.jsx";

function PopUpTextButton({ children, popUpContent, text}) {
    const [showOverlay, setShowOverlay] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setShowOverlay(true);
    };

    const handleClose = () => setShowOverlay(false);

    return (
        <>
            <button className={styles.PopUpTextButton} onClick={handleClick}>
                {children}
            </button>

            {showOverlay && (
                <PopUp onClose={handleClose} text={text}>
                    {popUpContent}
                </PopUp>
            )}
        </>
    );
}

export default PopUpTextButton;
