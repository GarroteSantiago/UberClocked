import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import PopUp from '../../../components/profile/PopUp.jsx';
import PopUpModifyProduct from '../../../components/profile/PopUpModifyProduct.jsx';

function SeeProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [showPopUp, setShowPopUp] = useState(false);
    const [showModifyPopUp, setShowModifyPopUp] = useState(false);
    const [modifiedProduct, setModifiedProduct] = useState(null);
    const [error, setError] = useState('');
    const [actionType, setActionType] = useState('');

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
            await axios.delete(`http://localhost:5000/api/products/${id}`);
            setShowPopUp(false);
            navigate("/home");
        } catch (error) {
            console.error(error);
            setError('Error deleting product');
        }
    };

    const modifyProduct = async (updatedData) => {
        try {
            const response = await axios.patch(`http://localhost:5000/api/products/${id}`, updatedData);
            console.log(response)
            setShowPopUp(false);
            navigate(`/store/pc-hardware/SearchByComponent/${product.Component_id}`);
        } catch (error) {
            console.error(error);
            setError('Error modifying product');
        }
    };

    const handleCancel = () => {
        setShowPopUp(false);
        setShowModifyPopUp(false);
    };

    const handleConfirm = () => {
        if (actionType === 'delete') {
            deleteProduct();
        }
    };

    const handleModifyClick = () => {
        setActionType('modify');
        setModifiedProduct({ ...product });
        setShowModifyPopUp(true);
    };

    const handleDeleteClick = () => {
        setActionType('delete');
        setShowPopUp(true);
    };

    useEffect(() => {
        getProduct();
    }, [id]);

    if (!product) {
        return <p>Cargando producto...</p>;
    }

    return (
        <div>
            <p>{product.name}</p>
            <img src={product.img} alt="Product image"/>
            <p>{product.Description}</p>
            <p>Precio ID: {product.Price_id}</p>
            <p>Componente ID: {product.Component_id}</p>
            <p>Stock: {product.Stock}</p>

            <button onClick={handleDeleteClick}>Eliminar producto</button>
            <button onClick={handleModifyClick}>Modificar producto</button>

            {showPopUp && (
                <PopUp
                    text="¿Estás seguro de que quieres eliminar este producto?"
                    onClose={handleCancel}
                    onConfirm={handleConfirm}
                />
            )}
            {showModifyPopUp && (
                <PopUpModifyProduct
                    onClose={handleCancel}
                    onConfirm={(updatedData) => modifyProduct(updatedData)}
                    product={modifiedProduct}
                />
            )}

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}
export default SeeProduct;
