import styles from './PopUpTextButton.module.css';
import PopUp from "./PopUp.jsx";
import axios from "axios";
import {useEffect, useState} from "react";

    function PopUpTextButton({ children, popUpContent, popUpText}) {
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

            {showOverlay && popUpContent && (
                <PopUp onClose={handleClose} text={popUpText}>
                    {popUpContent}
                </PopUp>
            )}
        </>
    );
}
export default PopUpTextButton;
