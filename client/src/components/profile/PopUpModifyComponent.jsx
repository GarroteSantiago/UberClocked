import React, { useState, useEffect } from "react";
import styles from "./PopUp.module.css";
import DataField from "../form/DataField.jsx";
import CommonButton from "../Buttons_and_others/CommonButton.jsx";

function PopUpModifyComponent({ onClose, onConfirm, component }) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [img, setImg] = useState("");

    useEffect(() => {
        if (component) {
            setName(component.name || "");
            setType(component.type || "");
            setImg(component.img || "");
        }
    }, [component]);

    const handleConfirm = () => {
        if (!name || !type || !img) {
            alert("Complete todos los campos");
            return;
        }

        const updatedData = { name, type, img };
        if (onConfirm) onConfirm(updatedData);
    };

    return (
        <div className={styles.overlayContent} onClick={(e) => e.stopPropagation()}>
            <h3>Modificar Componente</h3>

            <DataField fieldName="Component Name" fieldType="text" value={name} onChange={(e) => setName(e.target.value)} />
            <DataField fieldName="Type" fieldType="text" value={type} onChange={(e) => setType(e.target.value)} />
            <DataField fieldName="Image URL" fieldType="text" value={img} onChange={(e) => setImg(e.target.value)} />

            <CommonButton text="Confirmar" action={handleConfirm} />
            <CommonButton text="Cancelar" action={onClose} />
        </div>
    );
}

export default PopUpModifyComponent;
