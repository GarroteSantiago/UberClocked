import React from "react";
import styles from "./PopUp.module.css";
import DataField from "../form/DataField.jsx";
import CommonButton from "../CommonButton.jsx";

function PopUp({ children, onClose, text}) {
    return (
        <>
        <div className={styles.overlayContent} onClick={(e) => e.stopPropagation()}>
            <h1>Are you sure you want to {text}?</h1>

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