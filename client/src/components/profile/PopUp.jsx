import React from "react";
import styles from "./PopUp.module.css";
import CommonButton from "../Buttons_and_others/CommonButton.jsx";
import axios from "axios";

function PopUp({ children, onClose, text}) {
    const id = localStorage.getItem("user_id");
    const url = `/api/users/${id}`

    const patch = async () => {
        try {
            const response = await axios.patch(url);
            console.log(response);
        } catch (e) {
            console.error(e);
        }
        onClose();
    }

    return (
        <>
            <div className={styles.overlayContent} onClick={(e) => e.stopPropagation()}>
                <h3>{text}</h3>
                {children}
                <p>Confirm writing your password below</p>
                <CommonButton text="Confirm" action={patch}/>
                <CommonButton text="Cancel" action={onClose} />
            </div>
        </>
    );
}

export default PopUp;