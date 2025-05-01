import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import PopUp from '../components/profile/PopUp';

const EditProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({
        productName: '',
        productDescription: '',
        rating: '',
        price: ''
    });
    const [error, setError] = useState('');
    const [showPopUp, setShowPopUp] = useState(false); // Para controlar el popup
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/products/${id}`);
                const { name, description, rating, price } = response.data;
                setProduct({
                    productName: name || '',
                    productDescription: description || '',
                    rating: rating || '',
                    price: price || ''
                });
            } catch (error) {
                setError('Error fetching product');
            }
        };
        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.patch(`http://localhost:5000/api/products/${id}`, product);
            navigate('/products');
        } catch (error) {
            console.error(error);
            setError('Error updating product');
        }
    };

    const handleCancel = () => {
        setShowPopUp(false); // Cerrar el PopUp al cancelar
    };

    const handleConfirm = () => {
        setShowPopUp(false); // Cerrar el PopUp al confirmar
        handleSubmit(); // Confirmar y enviar el formulario
    };

    return (
        <div>
            <h2>Edit Product</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="productName"
                    placeholder="Product Name"
                    value={product.productName}
                    onChange={handleChange}
                />
                <textarea
                    name="productDescription"
                    placeholder="Product Description"
                    value={product.productDescription}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    value={product.rating}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={product.price}
                    onChange={handleChange}
                />
                <button type="button" onClick={() => setShowPopUp(true)}>
                    Save Changes
                </button>
            </form>

            {showPopUp && (
                <PopUp
                    text="Are you sure you want to save these changes?"
                    onClose={handleCancel}
                    onConfirm={handleConfirm}
                />
            )}
        </div>
    );
};

export default EditProduct;
