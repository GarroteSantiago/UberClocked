import React, { useState } from 'react';
import Form from "../components/form/Form.jsx";
import Navbar from "../components/navBar/Navbar.jsx";
import styles from "../screens/AddProduct/AddProduct.module.css";

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

    return (
        <div className={styles.screen}>
            <Navbar onScreenUrl="/add-product" />
            <h2 className={styles.title}>Agregar Producto</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} />
                <input type="text" name="productDescription" placeholder="Descripción" value={formData.productDescription} onChange={handleChange} />
                <input type="number" name="price" placeholder="Precio" value={formData.price} onChange={handleChange} />
                <input type="text" name="img" placeholder="URL de imagen" value={formData.img} onChange={handleChange} />
                <input type="number" name="Stock" placeholder="Stock" value={formData.Stock} onChange={handleChange} />
                <input type="number" name="Component_id" placeholder="ID del componente" value={formData.Component_id} onChange={handleChange} />
                <input type="number" name="rating" placeholder="Rating (1-5)" value={formData.rating} onChange={handleChange} />
                <button type="submit" className={styles.button}>Agregar</button>
            </form>
            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
}

export default AddProduct;
