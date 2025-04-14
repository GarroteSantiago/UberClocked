import React from "react";
import styles from "./PopUp.module.css";
import DataField from "../form/DataField.jsx";
import CommonButton from "../Buttons_and_others/CommonButton.jsx";

function PopUp({ children, onClose, text}) {
    return (
        <>
        <div className={styles.overlayContent} onClick={(e) => e.stopPropagation()}>
            <h3>{text}</h3>

            {children}
            <p>Confirm writing your password below</p>
            <DataField fieldName="Password" fieldType={"password"}/>
            <CommonButton text="Confirm" />
            <CommonButton text="Cancel" action={onClose} />
        </div>
        </>
    );
}

export default PopUp;