import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import PopUp from '../../../components/profile/PopUp.jsx'; // Asegúrate de importar el PopUp

function SeeProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [showPopUp, setShowPopUp] = useState(false); // Para mostrar el PopUp
    const [error, setError] = useState('');

    const getProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.log(error);
            setError('Error fetching product');
        }
    };

    const deleteProduct = async () => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/products/${id}`);
            console.log(response);
            setShowPopUp(false); // Cerrar el PopUp después de eliminar el producto
            navigate("/home");
        } catch (error) {
            console.error(error);
            setError('Error deleting product');
        }
    };

    const handleCancel = () => {
        setShowPopUp(false); // Cerrar el PopUp si el usuario cancela
    };

    const handleConfirm = () => {
        deleteProduct(); // Confirmar eliminación y ejecutar la función
    };

    useEffect(() => {
        getProduct();
    }, [id]);

    if (!product) {
        return <p>Cargando producto...</p>;
    }

    return (
        <div>
            <p>product.name</p>
            <img src={product.img} alt="Product image" />
            <p>{product.Description}</p>
            <p>{product.Price_id}</p>

            {/* Botón para eliminar el producto */}
            <button onClick={() => setShowPopUp(true)}>Delete product</button>

            {/* Mostrar el PopUp solo si showPopUp es true */}
            {showPopUp && (
                <PopUp
                    text="Are you sure you want to delete this product?"
                    onClose={handleCancel}
                    onConfirm={handleConfirm}
                />
            )}

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
} export default SeeProduct;