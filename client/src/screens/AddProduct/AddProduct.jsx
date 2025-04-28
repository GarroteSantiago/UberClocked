import React from 'react';
import Form from "../../components/form/Form.jsx";
import CommonButton from "../../components/Buttons_and_others/CommonButton.jsx";
import Navbar from "../../components/navBar/Navbar.jsx";
import DataField from "../../components/form/DataField.jsx";

function AddProduct() {
    const commonButton = <CommonButton text={"Load"}/>
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
        <>
            <Navbar onScreenUrl={"/add-product"}/>
            <Form
                title="Add Product"
                fields={fields}
                commonButton={commonButton}
                queryUrl={queryUrl}
                redirectUrl={redirectUrl}
            />
        </>
    )
} export default AddProduct;