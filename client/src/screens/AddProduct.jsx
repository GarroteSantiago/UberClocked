import React, { useState } from 'react';

function AddProducto() {
    const [formData, setFormData] = useState({
        productDescription: '',
        price: '',
        img: '',
        Stock: '',
        Component_id: '',
        name: '',
        rating: '' // Agregamos el campo rating
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

        const { productDescription, price, img, Stock, Component_id, name, rating } = formData;

        // Verificamos que el rating sea un valor entre 1 y 5
        if (!productDescription || !price || !Stock || !Component_id || !name || !rating) {
            setMessage('Todos los campos requeridos deben estar completos.');
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
                body: JSON.stringify({
                    productDescription,
                    price,
                    img,
                    Stock,
                    Component_id,
                    name,
                    rating // Incluimos el rating en la solicitud
                })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(`Producto creado exitosamente. ID: ${data.productId}`);
                setFormData({
                    productDescription: '',
                    price: '',
                    img: '',
                    Stock: '',
                    Component_id: '',
                    name: '',
                    rating: '' // Limpiamos el campo de rating
                });
            } else {
                setMessage(data.message || 'Error al crear el producto.');
            }
        } catch (error) {
            console.error('Error completo:', error);
            setMessage(`Error al enviar el producto: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Agregar Producto</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="productDescription"
                    placeholder="Descripción"
                    value={formData.productDescription}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Precio"
                    value={formData.price}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="img"
                    placeholder="URL de imagen"
                    value={formData.img}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="Stock"
                    placeholder="Stock"
                    value={formData.Stock}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="Component_id"
                    placeholder="ID del componente"
                    value={formData.Component_id}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="rating"
                    placeholder="Rating (1-5)"
                    value={formData.rating}
                    onChange={handleChange}
                />
                <button type="submit">Agregar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default AddProducto;
