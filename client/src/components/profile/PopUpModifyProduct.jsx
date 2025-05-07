import React, { useState, useEffect } from "react";
import styles from "./PopUp.module.css";
import DataField from "../form/DataField.jsx";
import CommonButton from "../Buttons_and_others/CommonButton.jsx";

function PopUpModifyProduct({ onClose, onConfirm, product }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [priceId, setPriceId] = useState("");
    const [componentId, setComponentId] = useState("");
    const [img, setImg] = useState("");
    const [stock, setStock] = useState("");

    useEffect(() => {
        if (product) {
            setName(product.name || "");
            setDescription(product.Description || "");
            setPriceId(product.Price_id || "");
            setComponentId(product.Component_id || "");
            setImg(product.img || "");
            setStock(product.Stock || "");
        }
    }, [product]);

    const handleConfirm = () => {
        const updatedData = {
            name,
            Description: description,
            Price_id: priceId,
            Component_id: componentId,
            img,
            Stock: stock
        };
        if (onConfirm) onConfirm(updatedData);
    };
    return (
        <div className={styles.overlayContent} onClick={(e) => e.stopPropagation()}>
            <h3>Modificar Producto</h3>

            <DataField fieldName="Nombre" fieldType="text" value={name} onChange={(e) => setName(e.target.value)} />
            <DataField fieldName="Descripción" fieldType="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            <DataField fieldName="ID de Precio" fieldType="text" value={priceId} onChange={(e) => setPriceId(e.target.value)} />
            <DataField fieldName="ID de Componente" fieldType="text" value={componentId} onChange={(e) => setComponentId(e.target.value)} />
            <DataField fieldName="URL de Imagen" fieldType="text" value={img} onChange={(e) => setImg(e.target.value)} />
            <DataField fieldName="Stock" fieldType="number" value={stock} onChange={(e) => setStock(e.target.value)} />

            <CommonButton text="Confirmar" action={handleConfirm} />
            <CommonButton text="Cancelar" action={onClose} />
        </div>
    );
}

export default PopUpModifyProduct;
