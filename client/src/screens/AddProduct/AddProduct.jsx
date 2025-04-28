import React from 'react';
import Form from "../../components/form/Form.jsx";
import Navbar from "../../components/navBar/Navbar.jsx";
import styles from "./AddProduct.module.css";
function AddProduct() {
    const commonButton = {
    text: "Add Product",
}
    const redirectUrl = "/add-product";
    const queryUrl = "/add-product";

    const fields = [
        {
            id: "name",
            fieldName: "Product name",
            fieldType: "text",
            name: "name",
        },
        {
            id: "price",
            fieldName: "Price",
            fieldType: "number",
            name: "price"
        },
        {
            id: "componentType",
            fieldName: "Component Type",
            fieldType: "text",
            name: "componentType",
        },
        {
            id: "description",
            fieldName: "Description",
            fieldType: "text",
            name: "description",
        },
        {
            id: "availability",
            fieldName: "stock",
            fieldType: "checkbox",
            name: "stock"
        },
    ]

    return (
        <div className={styles.screen}>
                <Navbar onScreenUrl={"/add-product"}/>
                <Form
                    title="Add Product"
                    fields={fields}
                    commonButton={commonButton}
                    textButton={{}}
                    queryUrl={queryUrl}
                    redirectUrl={redirectUrl}
                />
        </div>
    )
} export default AddProduct;