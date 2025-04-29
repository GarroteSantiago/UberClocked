import React, { useState } from 'react';
import Navbar from "../../components/navBar/Navbar.jsx";
import styles from "./AddProduct.module.css";
import Form from "../../components/form/Form.jsx"

function AddProduct() {
    const [formData, setFormData] = useState({
        name: '',
        productDescription: '',
        price: '',
        img: '',
        Stock: '',
        Component_id: '',
        rating: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, productDescription, price, img, Stock, Component_id, rating } = formData;

        if (!name || !productDescription || !price || !img || !Stock || !Component_id || !rating) {
            setMessage('Todos los campos deben estar completos.');
            return;
        }

        if (rating < 1 || rating > 5) {
            setMessage('El rating debe estar entre 1 y 5.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(`Producto creado exitosamente. ID: ${data.productId}`);
                setFormData({
                    name: '',
                    productDescription: '',
                    price: '',
                    img: '',
                    Stock: '',
                    Component_id: '',
                    rating: ''
                });
            } else {
                setMessage(data.message || 'Error al crear el producto.');
            }
        } catch (error) {
            setMessage(`Error al enviar el producto: ${error.message}`);
        }
    };

    const fields= [
        {
            fieldName: "Name",
            fieldType: "text",
            id: "name",
            name: "name",
        },
        {
            fieldName: "Description",
            fieldType: "text",
            id: "productDescription",
            name: "productDescription"
        },
        {
            fieldName: "Price",
            fieldType: "number",
            id: "price",
            name: "price"
        },
        {
            fieldName: "img",
            fieldType: "text",
            id: "img",
            name: "img"
        },
        {
            fieldName: "Stock",
            fieldType: "checkbox",
            id: "Stock",
            name: "Stock"
        },
        {
            fieldName: "Stock",
            fieldType: "number",
            id: "Stock",
            name: "Stock"
        },
        {
            fieldName: "Component id",
            fieldType: "number",
            id: "Component_id",
            name: "Component_id"
        },
        {
            fieldName: "Rating (1-5)",
            fieldType: "number",
            id: "rating",
            name: "rating"
        },
    ]
    return (
        <div className={styles.screen}>
            <Navbar onScreenUrl="/add-product" />
            <Form title="Add Product" fields ={fields} commonButton={{text: "Add product"}} textButton={{}} queryUrl="/api/products" redirectUrl="/home" />
            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
}

export default AddProduct;
