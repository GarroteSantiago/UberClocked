import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

function SeeProduct() {
    const { id } = useParams();

    const [product, setProduct] = React.useState(null);

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

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.img} alt="Product image" />
            <p>{product.Description}</p>
            <p>{product.Price_id}</p>
        </div>
    );
}

export default SeeProduct;
