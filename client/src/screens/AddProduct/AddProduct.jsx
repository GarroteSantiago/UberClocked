import React from 'react';
import Form from "../../components/form/Form.jsx";
import Navbar from "../../components/navBar/Navbar.jsx";
import styles from "./AddProduct.module.css";
function AddProduct() {
    const commonButton = {
    text: "Add Product",
}
    const redirectUrl = "/add-product";
    const queryUrl = "/api/products";

    const fields = [
        {
            id: "productDescription",
            fieldName: "Product name",
            fieldType: "text",
            name: "productDescription",
        },
        {
            id: "price",
            fieldName: "Price",
            fieldType: "number",
            name: "price"
        },
        {
            id: "Component_id",
            fieldName: "Component ID",
            fieldType: "number",
            name: "Component_id",
        },
        {
            id: "description",
            fieldName: "Description",
            fieldType: "text",
            name: "description",
        },
        {
            id: "Stock",
            fieldName: "In Stock",
            fieldType: "number",
            name: "Stock"
        },
        {
            id: "img",
            fieldName: "Image URL",
            fieldType: "text",
            name: "img",
        },
    ];


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