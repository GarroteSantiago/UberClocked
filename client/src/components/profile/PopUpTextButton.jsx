import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './PopUpTextButton.module.css';
import PopUp from "./PopUp.jsx";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function PopUpTextButton({ children, popUpContent, popUpText }) {
    const [showOverlay, setShowOverlay] = useState(false);
    const query = useQuery();
    const id = query.get("id"); // Extraemos el id de la URL

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
                <PopUp
                    onClose={handleClose}
                    text={popUpText}
                    id={id}
                >
                    {popUpContent}
                </PopUp>
            )}
        </>
    );
}

export default PopUpTextButton;
