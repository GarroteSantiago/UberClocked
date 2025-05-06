import React from "react";
import styles from "./PopUp.module.css";
import {useState} from "react";
import DataField from "../form/DataField.jsx";
import CommonButton from "../Buttons_and_others/CommonButton.jsx";

function PopUp({ onClose, text, onConfirm }) {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleConfirm = () => {
        if (!userName || !userEmail || !userPassword || !confirmPassword) {
            alert("Complete todos los campos");
            return;
        }

        if (userPassword !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        if (onConfirm) onConfirm();
    };

    return (
        <div className={styles.overlayContent} onClick={(e) => e.stopPropagation()}>
            <h3>{text}</h3>

            <DataField fieldName="User Name" fieldType="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <DataField fieldName="Email" fieldType="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
            <DataField fieldName="Password" fieldType="password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
            <DataField fieldName="Confirm Password" fieldType="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

            <CommonButton text="Confirm" action={handleConfirm} />
            <CommonButton text="Cancel" action={onClose} />
        </div>
    );
}

export default PopUp;