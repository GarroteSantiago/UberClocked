import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProductCard.module.css';
import Stars from "../Buttons_and_others/Stars.jsx";

function ProductCard({product }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${product.Product_id}`);
    };

    return (
        <div onClick={handleClick} className={styles.productCard} style={{ cursor: 'pointer' }}>
            <img src={product.image} alt={product.alt} className={styles.productImage} />
            <div className={styles.productInfo}>
                <h2 className={styles.productName}>{product.name}</h2>
                <p className={styles.productDescription}>{product.description}</p>
                <Stars initialRating={product.rating} />
                <p className={styles.productPrice}>{product.price}</p>
            </div>
        </div>
    );
}

export default ProductCard;
