import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from "axios";
import InfoCard from "../../../components/profile/InfoCard.jsx";
import DataField from "../../../components/form/DataField.jsx";

function SeeProduct() {
    const { id } = useParams();
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const [product, setProduct] = React.useState(null);

    const deleteProduct = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/products/${id}`);
            console.log(response);
            navigate("/home")
        } catch (error) {
            console.error(error);
        }
    }

    const getProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/products/${id}`)
            setProduct(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct();
    }, [getProduct, id])

    if (!product) {
        return <p>Cargando producto...</p>;
    }



    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const name =
        <>
            <DataField
                fieldName="name"
                fieldType="text"
                id="name"
                name="name"
                value={formData["name"] || ''}
                onChange={handleChange}
            />
        </>

    return (
        <div>
            <InfoCard title="Name" popUpText={{}} popUpContent={{}} data={product.name}/>
            <img src={product.img} alt="Product image" />
            <p>{product.Description}</p>
            <p>{product.Price_id}</p>
            <button onClick={() => deleteProduct(id)}> Delete product</button>
        </div>
    );
}

export default SeeProduct;
