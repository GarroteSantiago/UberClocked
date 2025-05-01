import React from "react";
import styles from "./PopUp.module.css";
import CommonButton from "../Buttons_and_others/CommonButton.jsx";

function PopUp({ children, onClose, text, onConfirm }) {
    return (
        <>
            <div className={styles.overlayContent} onClick={(e) => e.stopPropagation()}>
                <h3>{text}</h3>

                {children}
                <p>Confirm writing your password below</p>
                <CommonButton text="Confirm" action={onConfirm} />
                <CommonButton text="Cancel" action={onClose} />
            </div>
        </>
    );
}

export default PopUp;
